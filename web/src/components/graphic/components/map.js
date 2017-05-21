import React, {PureComponent} from "react"
import Echarts from "echarts-for-react"
import mapdata from "./mapData.json"
import "echarts/map/js/china"

const chartsConfig = (type)=>({
    backgroundColor: '#404a59',
    title : {
        text: '模拟迁徙',
        subtext: '数据纯属虚构',
        left: 'center',
        textStyle : {
            color: '#fff'
        }
    },
    tooltip : {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data:['北京 Top10', '上海 Top10', '广州 Top10'],
        textStyle: {
            color: '#fff'
        },
        selectedMode: 'single'
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#404a59'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: mapdata
})
export default class Graphic extends PureComponent{
  render(){
    let {type} = this.props
    return (
      <div className="graphic-map">
        <Echarts option={chartsConfig(type)} lazyUpdate={true}/>
      </div>
    )    
  }
  static defaultProps = {
      type: "map"
  }
}