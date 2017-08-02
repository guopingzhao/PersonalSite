import React, {PureComponent} from "react"
import {Link} from "react-router-dom"
import cls from "classnames"

import trans from "libs/trans"

import {generateRandomColors} from "libs/motheds/colors"
import "./styles.less"

export default class MenuItem extends PureComponent {
  state = {
    on: false,
    defaultColor: generateRandomColors({r: {rg: 200}}),
    nameColor: generateRandomColors()
  }
  render() {
    let {ismenu, name, index, color, images, children, path, cs, height, width} = this.props
    let {on, defaultColor, nameColor} = this.state
    return (
      <div className={cls("common-item", cs)}>
        {
          ismenu
            ? (
              <div
                className={cls("menu-item", {on: on})}
                style={{
                  width,
                  height,
                  backgroundColor: color || defaultColor
                }}
              >
                {
                  children || (
                  <Link
                    to={path}
                    style={{color: nameColor}}
                  >
                    <div className="menu-item-index">{index > 9 ? index : `0${index}`}</div>
                    <i
                      className="menu-item-name"
                    >
                      {typeof name === "string" ? trans(name) : name}
                    </i>
                  </Link>
                  )
                }
              </div>
            )
            : (
              <div
                className="void-item"
                style={{
                  width,
                  height,
                  backgroundImage: `url(${images})`,
                }}
              />
            )
        }
      </div>
    )
  }

  static defaultProps = {
    images: require("images/grid.png")
  }
}