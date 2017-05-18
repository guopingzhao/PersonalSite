import React, {PureComponent} from "react"
import {Link} from "react-router-dom"
import cls from "classnames"

import {generateRandomColors} from "libs/motheds/colors"
import "./styles.less"

export default class MenuItem extends PureComponent {
  render(){
    let {ismenu, name, index, color, images, opacity, children, path, cs} = this.props
    return (
      <div className={cls("common-item", cs)}>
        {
          ismenu 
            ? <div className="menu-item" style={{backgroundColor: color, opacity}}>
                {
                  children 
                    ||
                  <Link to={path}>
                    <span>{index > 9 ? index : `0${index}`}</span>
                    <i>{name}</i>
                    <sup>{name}</sup>
                  </Link>
                }
                
              </div>
            : <div className="void-item" style={{backgroundImage: `url(${images})`}}></div>
        }
      </div>
    )
  }

  static defaultProps = {
    color: generateRandomColors({r:{rg:200}}),
    images: require("images/grid.png"),
    opacity: 1
  }
}