import React, {PureComponent} from "react"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import trans from "libs/trans"
import Item from "./components/item"
import "./styles.less"

import {menus, style, clientWidth, clientHeight} from "./const"
import {generateIntNumber} from "libs/motheds/maths"

@connect(
  ({home})=>({

  }),
  (dispatch)=>(
    bindActionCreators({
      
    },dispatch)
  )
)
export default class Home extends PureComponent {
  state = {
    date: Date.now(),
    bg: this.getBgImg()
  }
  render() {
    let {bg} = this.state
    return (
      <div className="home" style={{backgroundImage: `url(${bg})`}}>
        <div className="home-music">

        </div>
        <div className="home-nav">
          {this.getItems()}
        </div>
        <div className="home-control">
          <span className="icon icon-img" onClick={this.updateBg}/>
        </div>
      </div>    
    )
  }
  componentWillMount(){
    window.addEventListener("resize",this.comUpdate)
  }
  getItems(){
    let {clientWidth, clientHeight} = document.documentElement,
        Wnum = Math.ceil(clientWidth / 100),
        Hnum = Math.ceil(clientHeight / 100),
        {positions, orders} = this.upsetMenus(Wnum * Hnum),
        items = [],
        order = 0
    style.setProperty("--home-item-width", `${(clientWidth - Wnum)/ Wnum}px`)
    style.setProperty("--home-item-height", `${(clientHeight - Hnum)/ Hnum}px`)

    for (let i = 0, len = Wnum * Hnum; i < len; i++){
      if(positions.some((v) => v === i)){
        let index = orders[order++]
        items.push(<Item cs={`home-item item-${i}`} key={i} {...menus[index]} ismenu={true}/>)
      } else {
        items.push(<Item cs={`home-item item-${i}`} key={i}/>)
      }
      
    }
    return items
  }
  upsetMenus(num){
    let positions = new Set(),
        orders = new Set(),
        {length} = menus
    
    while(positions.size < length){
      positions.add(generateIntNumber(num-1))
    }
    while(orders.size < length){
      orders.add(generateIntNumber(length-1))
    }
    positions = Array.from(positions)
    orders = Array.from(orders)
    return {positions, orders}
  }
  comUpdate = ()=>{
    this.forceUpdate()
  }
  updateBg = ()=>{
    this.setState({
      bg: this.getBgImg()
    })
  }
  getBgImg(num = 9){
    let i = generateIntNumber(num)
    return require(`images/homebg${i}.jpg`)
  }
  componentWillUnmount(){
    window.removeEventListener("resize",this.comUpdate)
  }
}