import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import cls from "classnames"
import { CLASS_PREFIX as cp } from "../../const"
import "./styles.less"
export default class Input extends PureComponent {
  state = {
    on: false
  }
  render() {
    let { cs, icon, width, type, className, value, ...leftover } = this.props,
      { on } = this.state
    return (
      <div
        className={cls(`${cp}-input`, cs, className, { on })}
        style={{ width }}
      >
        <span className={cls("icon", icon)} />
        <input
          type={type === "password" ? "text" : type}
          value={value || ""}
          {...leftover}
          onFocus={(e) => {
            if (type === "password") {
              e.target.type = "password"
            }
            this.setState({ on: true })
          }}
          onBlur={() => {
            this.setState({ on: false })
          }}
        />
      </div>
    )
  }
  static defaultProps = {
    type: "text"
  }
  static PropTypes = {
    cs: PropTypes.oneOfType([       //指定容器class
      PropTypes.string,
      PropTypes.object
    ]),
    icon: PropTypes.string,         //input输入框前图标，需引入图标库
    value: PropTypes.string,        //指定input的值
    onChange: PropTypes.func,       //input值改变的回调
    width: PropTypes.string         //指定input的宽度
  }
}