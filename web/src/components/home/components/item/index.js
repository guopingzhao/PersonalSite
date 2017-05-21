import React, {PureComponent} from "react"
import {Link} from "react-router-dom"
import cls from "classnames"

import trans from "libs/trans"

import {generateRandomColors} from "libs/motheds/colors"
import "./styles.less"

const {style} = document.documentElement

export default class MenuItem extends PureComponent {
  state = {
    on: false,
    defaultColor: generateRandomColors({r:{rg:200}})
  }
  render(){
    let {ismenu, name, index, color, images, children, path, cs} = this.props
    let {on, defaultColor} = this.state
    return (
      <div className={cls("common-item", cs)}>
        {
          ismenu 
            ? <div 
                className={cls("menu-item", {on: on})} 
                style={{backgroundColor: color || defaultColor}}
                onMouseOver={()=>{this.onMouseOver()}}
                onMouseOut={()=>{this.onMouseOut()}}
              >
                {
                  children 
                    ||
                  <Link to={path}>
                    <div className="menu-item-index">{index > 9 ? index : `0${index}`}</div>
                    <i className="menu-item-name">{typeof name === "string" ? trans(name) : name}</i>
                  </Link>
                }
                
              </div>
            : <div className="void-item" style={{backgroundImage: `url(${images})`}}></div>
        }
      </div>
    )
  }
  onMouseOut(){
    this.setState({
      on: false
    })
    style.setProperty("--menu-item-opacity", 1)
  }
  onMouseOver(){
    this.setState({
      on: true
    })
    style.setProperty("--menu-item-opacity", .6)
  }
  static defaultProps = {
    images: require("images/grid.png")
  }
}