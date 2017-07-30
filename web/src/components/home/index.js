import React, {PureComponent} from "react"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import trans from "libs/trans"
import Item from "./components/item"
import "./styles.less"

// import Music from "libs/components/music-player"


import {menus, clientWidth, clientHeight} from "./const"
import {generateIntNumber} from "libs/motheds/maths"

@connect(
  ()=>({
  }),
  (dispatch)=>(
    bindActionCreators({
    },dispatch)
  )
)
export default class Home extends PureComponent {
  state = {
    bg: this.getBgImg(),
    clientWidth,
    clientHeight,
    items: []
  }
  render() {
    let {bg, current, items} = this.state
    return (
      <div className="home" style={{backgroundImage: `url(${bg})`}}>
        <div className="home-music">
        </div>
        <div className="home-nav">
          {items}
        </div>
        <div className="home-control">
          <div className="home-control-random" onClick={this.upsetMenus}/>
          <div className="home-control-row" onClick={this.setrow}/>
          <div className="home-control-img" onClick={this.updateBg}/>
        </div>
      </div>    
    )
  }
  renderItems(positions){
    let {width, height, rowNum, colNum} = this.calculate(),
      itemNum = rowNum * colNum,
      position = positions || this.getPosition(itemNum),
      order = 0,
      items = []
    for(let i = 0; i < itemNum; i++){
      if(position.some(v => v === i)){
        let {path, name, index} = menus[order++]
        items.push(<Item key={i}  cs="home-item" width={width} height={height} path={path} name={name} index={index} ismenu/>)
      } else {
        items.push(<Item key={i}  cs="home-item" width={width} height={height}/>)  
      }
    }
    this.setState({
      items
    })
  }
  calculate = () => {
    const {clientHeight, clientWidth} = this.state
    let rowNum =  Math.floor(clientHeight / 90),
      colNum =  Math.floor(clientWidth / 90),
      height = (clientHeight - rowNum) / rowNum,
      width= (clientWidth - colNum) / colNum

    return {
      height,
      width,
      rowNum,
      colNum
    }
  }
  getPosition = (num) => {
    let positions = new Set()

    while(positions.size < menus.length){
      positions.add(generateIntNumber(num))
    }

    return Array.from(positions)
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
  upsetMenus = () => {
    this.renderItems()
  }
  setrow = () => {
    let positions = menus.map(v => v.index).sort()
    this.renderItems(positions)
  }
  comUpdate = () => {
    const {clientWidth, clientHeight} = document.documentElement
    this.setState({
      clientWidth,
      clientHeight
    },()=>{
      this.renderItems()
    })
  }
  componentWillMount(){
    window.addEventListener("resize",this.comUpdate)
    this.renderItems()
  }
  componentWillUnmount(){
    window.removeEventListener("resize",this.comUpdate)
  }
}