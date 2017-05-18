import React, {PureComponent} from "react"
import {intlShape, injectIntl, defineMessages} from 'react-intl'
import Item from "./components/item"

import "./styles.less"

@injectIntl
export default class Home extends PureComponent {
  state = {
    date: Date.now()
  }
  render() {
    let {intl:{formatMessage}} = this.props
    console.log(formatMessage)
    return (
      <div className="home">
        {formatMessage({id:"MyBlog"})}
        {this.getRows()}
      </div>    
    )
  }
  componentWillMount(){
    window.addEventListener("resize",()=>{
      this.setState({
        date: Date.now()
      })
    })
  }
  getItems(i){
    let {clientWidth, style} = document.documentElement
    let Wnum = Math.floor(clientWidth / 100),
        items = []
    style.setProperty("--home-item-width", `${(clientWidth - Wnum)/ Wnum}px`)
    for (let i = 0; i < Wnum; i++){
      items.push(<Item cs="home-item" key={i}/>)
    }
    return <div className="home-row" key={i} >{items}</div>
  }
  getRows(){
    let {clientHeight, style} = document.documentElement
    let Hnum = Math.floor(clientHeight / 100),
        rows = []
    style.setProperty("--home-item-height", `${(clientHeight - Hnum)/ Hnum}px`)
    for(let i = 0; i < Hnum; i++){
      rows.push(this.getItems(i))
    }
    return rows
  }
}