import React, {PureComponent} from "react"
import Echarts from "echarts-for-react"
var xAxisData = [];
var data1 = [];
var data2 = [];
var data3 = [];
var data4 = [];

for (var i = 0; i < 10; i++) {
    xAxisData.push('Class' + i);
    data1.push((Math.random() * 2).toFixed(2));
    data2.push(-Math.random().toFixed(2));
    data3.push((Math.random() * 5).toFixed(2));
    data4.push((Math.random() + 0.3).toFixed(2));
}
const chartsConfig = (type, legend)=>({
    legend: legend,
    animation: true,
    tooltip: {
      formatter: "{a}:{c}"
    },
    xAxis: {
        data: xAxisData,
        name: 'X Axis',
        silent: false,
        axisLine: {onZero: true},
        splitLine: {show: false},
        splitArea: {show: false}
    },
    yAxis: {
        inverse: false,
        splitArea: {show: false},
        min: "dataMin",
        boundaryGap: false
    },
    series: type === "pie" ? [{
        name: 'bar',
        type,
        stack: "false",
        barMaxWidth: "50%",
        barGap: "10%",
        barCategoryGap: "30%",
        data: data1
    }]
    :[
        {
            name: 'bar',
            type,
            stack: "false",
            barMaxWidth: "50%",
            barGap: "10%",
            barCategoryGap: "30%",
            data: data1
        },
        {
            name: 'bar2',
            type,
            stack: "false",
            data: data2
        },
        {
            name: 'bar3',
            type,
            stack: "false",
            data: data3
        },
        {
            name: 'bar4',
            type,
            stack: "false",
            data: data4
        }
    ]
})
export default class Graphic extends PureComponent{
  render(){
    let {type, legend} = this.props
    return (
      <div className="graphic-barandline">
        <Echarts option={chartsConfig(type,legend)} lazyUpdate={true}/>
      </div>
    )    
  }
  static defaultProps = {
      type: "bar"
  }
}