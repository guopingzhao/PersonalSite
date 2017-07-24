import React, {PureComponent} from "react"
import {withRouter, Route, Switch} from "react-router-dom"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import {IntlProvider, addLocaleData} from "react-intl"
import en from 'react-intl/locale-data/en' 
import zh from 'react-intl/locale-data/zh'
import my from 'react-intl/locale-data/my'
import setLocale from "./actions"
import localeData from "libs/langs"

addLocaleData([...en, ...zh, ...my])

import Home from "components/home"

@withRouter
@connect(
  ({app}) => ({
    locale: app.locale
  })
)
export default class App extends PureComponent {
  render() {
    let {locale} = this.props
    return (
      <IntlProvider locale={locale} messages={localeData[locale]}>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </IntlProvider>
    )
  }
}
