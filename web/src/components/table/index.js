import React,{PureComponent} from "react"
import update from "react/lib/update"
import moment from "moment"
import "./styles.less"
import Select,{Option} from "antd/lib/select"
import "antd/lib/select/style"
import Tree from "antd/lib/tree"
const TreeNode = Tree.TreeNode
import "antd/lib/tree/style"
import TimePicker  from "antd/lib/time-picker"
import "antd/lib/time-picker/style"
import {MonthPicker} from "antd/lib/date-picker"
import "antd/lib/date-picker/style"
const treeData = [{
  label: 'Node1',
  value: '0-0',
  key: '0-0',
  children: [{
    label: 'Child Node1',
    value: '0-0-1',
    key: '0-0-1',
  }, {
    label: 'Child Node2',
    value: '0-0-2',
    key: '0-0-2',
  }],
}, {
  label: 'Node2',
  value: '0-1',
  key: '0-1',
}]
const time = {
  1: ["周一","周二","周三","周四","周五","周六","周日"],
  2: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
}
export default class ST extends PureComponent{
  state = {
    data: [],
    child: {},
    type: 0
  }
  render(){
    return (
      <div>
        <Tree
          showLine
          checkable
          checkedKeys={this.state.checkedKeys}
          onCheck={this.onCheck}
          loadData={this.loadData}
        >
          {
            this.state.data.map(v=><TreeNode key={v} value={v} title={v}>
              {
                (this.state.child[v] || []).map(i=><TreeNode key={`${v}->${i}`} value={i} title={i} isLeaf/>)
              }
            </TreeNode>)
          }
        </Tree>
        <div>
          <Select onChange={(value)=>this.setState({type:value})} style={{minWidth:100}}>
            <Option key="1" value={0}>每天</Option>
            <Option key="2" value={1}>每周</Option>
            <Option key="3" value={2}>每月</Option>
          </Select>
          {
            this.state.type ? 
              <Select style={{minWidth:200}} mode="multiple" onChange={(value)=>console.log(value)}>
                {
                  time[this.state.type].map(v=><Option key={v} value={v}>{v}</Option>)
                }
              </Select> : null
          }
          <TimePicker format="hh:mm" onChange={(value, timestring)=>console.log(value,moment(timestring).format("hh:mm"))}/>
          <MonthPicker></MonthPicker>
        </div>
      </div>
    )
  }
  onCheck = (checkedKeys,{checked})=>{
    console.log(checkedKeys, checkedKeys.filter(v=>/\-\>/g.test(v)))
    if(checkedKeys.filter(v=>/->/.test(v)).length > 3) return
    this.setState({
      checkedKeys
    })
  }
  loadData = async ({props:{eventKey}})=>{
    let data = await fetch(`test/b/${eventKey}`).then(res=>res.json())
    this.setState({
      child: update(this.state.child,{
        [eventKey]: {
          $set: data
        }
      })
    })
  }
  onExpand = async (key,{expanded})=>{
    if(expanded){
      let data = await fetch(`test/b/${key.slice(key.length-1)}`).then(res=>res.json())
      this.setState({
        child: update(this.state.child,{
          [key.slice(key.length-1)]: {
            $set: data
          }
        })
      })
    }
  }
  componentDidMount = async ()=>{
    let data = await fetch("test/a").then(res=>res.json())
    this.setState({data})
  }
  
}