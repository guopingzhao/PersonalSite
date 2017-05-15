import React, {PureComponent} from "react"
import { withRouter, Route, Switch } from "react-router-dom"
import Home from "components/home"
import { connect } from "react-redux"

@withRouter
@connect(({ app }) => ({
  locale: app.locale,
}))
export default class App extends PureComponent {
  render() {
    return (
      <div>123</div>
    )
  }
}
