import "babel-polyfill"
import "./index.less"
import React from "react"
import ReactDOM from "react-dom"
import { AppContainer as HMRContainer } from "react-hot-loader"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import {IntlProvider, addLocaleData} from "react-intl"
import en from 'react-intl/locale-data/en' 
import zh from 'react-intl/locale-data/zh'
import store from "store"
import quickClick from "quickclick"
import App from "components/app"

import localeData from "libs/langs"

addLocaleData([...en, ...zh])

console.log(window.App)

quickClick(document.body)

function render(Comp) {
  ReactDOM.render(
    <HMRContainer>
      <Provider store={store}>
        <IntlProvider locale="zh" messages={localeData.zh}>
          <BrowserRouter>
            <Comp/>
          </BrowserRouter>
        </IntlProvider>
      </Provider>
    </HMRContainer>,
    document.getElementById("root"),
  )
}

render(App)

if (module.hot) {
  module.hot.accept("components/app", () => render(App))
}