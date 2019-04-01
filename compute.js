#! /usr/bin/env node
const fs = require("fs");
const path = require("path");

const input = path.resolve("./interface.ts");
const output = path.resolve("./api.md");

const data = fs.readFileSync(input, "utf8");

// console.log("data", data, typeof data);

const arr = data
  .replace(/ \| /g, " ")
  .slice(0, data.lastIndexOf("}"))
  .split("/**");
const interfaceName = arr[0].match(/interface (.*) {/)[1];
const attrs = arr.slice(1);
let result = "";

result = attrs
  .map(attr => {
    attr = attr.split("*/");
    let desc = attr[0].replace(/[\* | \n]/g, " ").trim();
    let keyVal = attr[1].match(/([^:]*)[?]:((.*\n.*)*)/);

    return keyVal && keyVal.length > 2
      ? `| ${keyVal[1].replace(/\s/g, "")} | ${desc} | ${keyVal[2].replace(
          /\n/g,
          " "
        )} | - |
  `
      : "";
  })
  .join("");

let newData;
newData = `
interfaceName: ${interfaceName}

| 属性              |                                       说明                                       |              类型              |          默认值 |
| ----------------- | :------------------------------------------------------------------------------: | :----------------------------: | --------------: |
`.concat(result);

fs.writeFileSync(output, newData);
