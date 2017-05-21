import React, {PureComponent} from "react"
import Charts from "./components"
import "./styles.less"

const types = {
  bar: ["bar", "line", "pie"],
  map: [""]
}

export default class Graphic extends PureComponent{
  state = {
    barShow: true
  }
  render(){
    let {barShow} = this.state
    return (
      <div className="graphic">
        <div className="graphic-left">
          <div className="graphic-left-bar" 
            onMouseOver={()=>this.setState({barShow: true})} 
            onMouseOut={()=>this.setState({barShow: true})}
          >
            <span className="icon icon-tubiao" ></span>
            <div className="graphic-left-bar-list">
              {barShow && types.bar.map(v=><Charts type={v} key={v} lengend={{}}/>)}
            </div>
          </div>
          <div className="graphic-left-map">
            <span className="icon icon-map"></span>
            <div className="graphic-left-map-list">
            </div>
          </div>
        </div>
        <div className="graphic-right">
          
        </div>
      </div>
    )    
  }
}