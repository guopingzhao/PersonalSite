import React, {PureComponent} from "react"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import trans from "libs/trans"
import Item from "./components/item"
import "./styles.less"

// import Music from "libs/components/music-player"

import {list} from "../music/actions"

import {menus, style, clientWidth, clientHeight} from "./const"
import {generateIntNumber} from "libs/motheds/maths"

@connect(
  ()=>({
    // music: music.list
  }),
  (dispatch)=>(
    bindActionCreators({
      getmusic: list
    },dispatch)
  )
)
export default class Home extends PureComponent {
  state = {
    bg: this.getBgImg(),
    clientWidth,
    clientHeight,
    positions: [],
    orders: [],
    current: 0
  }
  render() {
    let {bg, current} = this.state
    return (
      <div className="home" style={{backgroundImage: `url(${bg})`}}>
        <div className="home-music">
        </div>
        <div className="home-nav">
          {this.getItems()}
        </div>
        <div className="home-control">
          <div className="home-control-random" onClick={this.upsetMenus}/>
          <div className="home-control-row" onClick={this.setrow}/>
          <div className="home-control-img" onClick={this.updateBg}/>
        </div>
      </div>    
    )
  }
  setrow = ()=>{
    let {clientWidth} = this.state,
        Wnum = Math.ceil(clientWidth / 100),
        positions = [],
        orders = [],
        order = 0,
        {length} = menus
    while(positions.length < length){
      positions.push(++Wnum)
    }
    while(orders.length < length){
      orders.push(order++)
    }
    this.setState({
      positions, 
      orders
    })
  }
  getItems(){
    let {positions, orders, clientHeight, clientWidth} = this.state,
        Wnum = Math.ceil(clientWidth / 100),
        Hnum = Math.ceil(clientHeight / 100),
        items = [],
        order = 0

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
  upsetMenus = ()=>{
    let {clientWidth, clientHeight} = this.state,
        Wnum = Math.ceil(clientWidth / 100),
        Hnum = Math.ceil(clientHeight / 100),
        num = Wnum * Hnum,
        positions = new Set(),
        orders = new Set(),
        {length} = menus
    style.setProperty("--home-item-width", `${(clientWidth - Wnum)/ Wnum}px`)
    style.setProperty("--home-item-height", `${(clientHeight - Hnum)/ Hnum}px`)
    while(positions.size < length){
      positions.add(generateIntNumber(num-1))
    }
    while(orders.size < length){
      orders.add(generateIntNumber(length-1))
    }
    positions = Array.from(positions)
    orders = Array.from(orders)
    this.setState({
      positions, 
      orders
    })
  }
  comUpdate = async ()=>{
    const {clientWidth, clientHeight} = document.documentElement
    await this.setState({
      clientWidth, 
      clientHeight
    })
    this.upsetMenus()
    this.updateBg()
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
  componentWillMount(){
    window.addEventListener("resize",this.comUpdate)
    this.upsetMenus()    
    this.props.getmusic()
  }
  componentWillUnmount(){
    window.removeEventListener("resize",this.comUpdate)
  }
}