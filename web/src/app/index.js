import React, {Component} from "react"
import {Router, Route} from "react-router"
import history from "libs/history"

import Home from "app/components/home"

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={Home}/>
      </Router> 
    )
  }
}
