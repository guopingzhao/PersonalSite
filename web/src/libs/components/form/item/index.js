import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import cls from "classnames"
import { CLASS_PREFIX as cp } from "../../const"
import "./styles.less"

export default class HYitem extends PureComponent {
  static isFormItem = true
  state = {
    error: null
  }
  render() {
    const { label, cs, isRequire } = this.props
    return (
      <div className={cls(`${cp}-item`, cs)}>
        <div className={`${cp}-item-warp`}>
          {label === false ? null : <div className={`${cp}-item-label`}>{isRequire ? <span>*</span> : ""}{label || name}</div>}
          <div>{this.props.children}</div>
        </div>
      </div>
    )
  }
  componentDidMount() {
    console.log(this.props.children)
  }
  
  static propTypes = {
    label: PropTypes.oneOfType([
      PropTypes.oneOf([false]),         //不显示标签
      PropTypes.string,                 //显示标签的类容
      PropTypes.node,
      PropTypes.element
    ]),
    cs: PropTypes.oneOfType([           //指定容器class
      PropTypes.string,
      PropTypes.object
    ])
  }
}
