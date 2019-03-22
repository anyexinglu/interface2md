#! /usr/bin/env node
const fs = require("fs");
const path = require("path");

const input = path.resolve("./input.text");
// const output = path.resolve("./output.json");

const data = fs.readFileSync(input, "utf8");

console.log("data", data, typeof data);
// const { left, top, eles } = JSON.parse(data);

// let maxId = 1;
// eles.forEach(item => {
//   if (item.id > maxId) {
//     maxId = item.id;
//   }
// });

// const result = eles.map(ele => ({
//   ...ele,
//   left: ele.left + left,
//   top: ele.top + top,
//   id: ++maxId
// }));
// fs.writeFileSync(output, JSON.stringify(result, null, 2));
