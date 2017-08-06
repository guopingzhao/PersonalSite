import React, {PureComponent} from "react"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import Item from "./components/item"
import "./styles.less"

import {menus, clientWidth, clientHeight} from "./const"
import {generateIntNumber} from "libs/motheds/maths"
import Modal from "libs/components/modal"
import Form, {FormItem, create} from "libs/components/form"
import Input from "libs/components/form/input"

@connect(
  () => ({
  }),
  (dispatch) =>
    bindActionCreators({
    }, dispatch)

)
@create({
  globalRules: ["require"]
})
export default class Home extends PureComponent {
  state = {
    bg: this.getBgImg(),
    clientWidth,
    clientHeight,
    items: [],
    visible: false,
    inputs: []
  }
  render() {
    let {bg, items} = this.state
    this.props.form.initFields()
    return (
      <div
        className="home"
        style={{backgroundImage: `url(${bg})`}}
      >
        <div
          className="home-music" 
          onClick={()=>{
            this.props.form.setFields({test: "3333333"})
            this.setState({visible: true})}
          }
        >
          {this.state.visible ? "hide" : "show"}
        </div>
        <div className="home-nav">
          {items}
        </div>
        <div className="home-control">
          <div
            className="home-control-random"
            onClick={this.upsetMenus}
          />
          <div
            className="home-control-row"
            onClick={this.setrow}
          />
          <div
            className="home-control-img"
            onClick={this.updateBg}
          />
        </div>
        <Modal
          title="xxxx"
          visible={this.state.visible}
          onCancel={()=>{
            this.props.form.resetFields()
            this.setState({visible: false})
          }}
          onOk={()=>{
            this.props.form.validateFields((err, val)=>{
              if (!err) {
                console.log(val)
                this.setState({
                  visible: false
                })
                this.props.form.resetFields()
              }
            })
          }}
        >
          <div>
            <FormItem>
              {
                this.props.form.getFieldDecorator("test",{
                  rules: [
                    {
                      rule: /^\d+$/,
                      message: "只啊杀啥来上课回来可能是电话你认识的方法能看到康复理疗科是电脑技术导航路径松岛枫女教师电话你！"
                    }
                  ]
                })(
                  <Input/>
                )
              }
            </FormItem>
          </div>
          {
            this.state.visible2 
            ? this.props.form.getFieldDecorator("test2")(
                <Input/>
              )
            : null
          }
        <span
          onClick={()=>{this.setState({visible2: !this.state.visible2})}}
        >
          {this.state.visible2 ? "hide" : "show"}
        </span>
        {
          this.props.form.getFieldDecorator("test3")(
            this.state.inputs
          )
        }
        <span
          onClick={()=>{this.setState({inputs: this.state.inputs.concat(<Input/>)})}}
        >
          +
        </span>
        <span
          onClick={()=>{this.setState({inputs: this.state.inputs.slice(0, this.state.inputs.length - 1)})}}
        >
          -
        </span>
        </Modal>
      </div>
    )
  }
  renderItems(positions) {
    let {width, height, rowNum, colNum} = this.calculate(),
      itemNum = rowNum * colNum,
      position = positions || this.getPosition(itemNum),
      order = 0,
      items = []
    for (let i = 0; i < itemNum; i++) {
      if (position.some(v => v === i)) {
        let {path, name, index} = menus[order++]
        items.push(<Item
          key={i}
          cs="home-item"
          width={width}
          height={height}
          path={path}
          name={name}
          index={index}
          ismenu
                   />)
      } else {
        items.push(<Item
          key={i}
          cs="home-item"
          width={width}
          height={height}
                   />)
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

    while (positions.size < menus.length) {
      positions.add(generateIntNumber(num))
    }

    return Array.from(positions)
  }
  updateBg = () => {
    this.setState({
      bg: this.getBgImg()
    })
  }
  getBgImg(num = 9) {
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
    }, () => {
      this.renderItems()
    })
  }
  componentWillMount() {
    window.addEventListener("resize", this.comUpdate)
    this.renderItems()
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.comUpdate)
  }
}