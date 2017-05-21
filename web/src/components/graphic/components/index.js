import React from "react"
import BarLine from "./barandline"
import Pie from "./pie"
import Map from "./map"
const clone = React.cloneElement
const charts = {
  bar: BarLine,
  line: BarLine,
  pie: Pie,
  map: Map
}

export default ({type, ...leftover})=>{
  const Chart = charts[type]
  return <div><Chart type={type} {...leftover}/></div>  
}