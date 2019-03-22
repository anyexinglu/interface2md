interface BaseButtonProps {
  /**
   * 'primary' | 'default' | 'ghost' | 'gray' | 'text-primary' | 'text' | 'text-gray'
   * @default 'default'
   */
  type?: ButtonType
  /** 自定义按钮内部图标，我们有自己的图标库 */
  icon?: string
  /**
   * 设置按钮大小 'large' | 'default' | 'small'
   *  @default 'default'
   */
  size?: ButtonSize
  /** 是否显示loading */
  loading?: boolean
  /** 是否可以点击 */
  disabled?: boolean
  /** 'submit' | 'button' | 'reset'
   * 设置 button 原生的 type 值，可选值请参考 HTML 标准，默认值为“button”
   * @default 'button'*/
  htmlType?: ButtonHTMLType
  /** className 前缀，一般情况下不要随意改动  */
  prefixCls?: string
  /** 自定义className,追加形式  */
  className?: string
  /** 按钮内容 */
  children?: React.ReactNode
  /** 点击事件 */
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
  /** type = "text*" 类型的情况下使用 */
  href?: string
  /** type = "text*" 类型的情况下使用 */
  target?: string
  /** 自定义样式 */
  style?: React.CSSProperties
  /** autodisable 是否禁用 */
  autodisable?: boolean
}