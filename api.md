
interfaceName: BaseButtonProps

| 属性              |                                       说明                                       |              类型              |          默认值 |
| ----------------- | :------------------------------------------------------------------------------: | :----------------------------: | --------------: |
|   type | 'primary' 'default' 'ghost' 'gray' 'text-primary' 'text' 'text-gray'      @default 'default' |  ButtonType | - |
  |   icon | 自定义按钮内部图标，我们有自己的图标库 |  string | - |
  |   size | 设置按钮大小 'large' 'default' 'small'       @default 'default' |  ButtonSize | - |
  |   loading | 是否显示loading |  boolean | - |
  |   disabled | 是否可以点击 |  boolean | - |
  |   htmlType | 'submit' 'button' 'reset'      设置 button 原生的 type 值，可选值请参考 HTML 标准，默认值为“button”      @default 'button' |  ButtonHTMLType | - |
  |   prefixCls | className 前缀，一般情况下不要随意改动 |  string | - |
  |   className | 自定义className,追加形式 |  string | - |
  |   children | 按钮内容 |  React.ReactNode | - |
  |   onClick | 点击事件 |  React.MouseEventHandler<HTMLButtonElement HTMLAnchorElement> | - |
  |   href | type = "text " 类型的情况下使用 |  string | - |
  |   target | type = "text " 类型的情况下使用 |  string | - |
  |   style | 自定义样式 |  React.CSSProperties | - |
  |   autodisable | autodisable 是否禁用 |  boolean | - |
  