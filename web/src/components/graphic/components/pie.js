import React, {PureComponent} from "react"
import Echarts from "echarts-for-react"

const chartsConfig = (type, legend)=>( {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: legend,
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
})
export default class Graphic extends PureComponent{
  render(){
    let {type, legend} = this.props
    return (
      <div className="graphic-pie">
        <Echarts option={chartsConfig(type, legend)} lazyUpdate={true}/>
      </div>
    )    
  }
  static defaultProps = {
      type: "pie"
  }
}