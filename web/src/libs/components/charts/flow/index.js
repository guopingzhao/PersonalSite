import React, {PureComponent} from "react"

export default class Flow extends PureComponent{
  render(){
    return (
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <g>
          <rect x="0" y="0" width="300" height="50" stroke="#000" onClick={()=>console.log("这是矩形")}></rect>        
          <text x="0" y="15" fill="#fff"onClick={()=>console.log("这是文字")}>>I love SVG</text>
        </g>
        <path d="M 150 50 L 150 100" stroke="#000"></path>
      </svg>
    )
  }
}