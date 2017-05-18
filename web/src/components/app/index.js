import React, {PureComponent} from "react"
import { withRouter, Route, Switch } from "react-router-dom"
import Home from "components/home"
import { connect } from "react-redux"

@withRouter
@connect((state) => ({
  state
}))
export default class App extends PureComponent {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home}/>>
      </Switch>
    )
  }
}
