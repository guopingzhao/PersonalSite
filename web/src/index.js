import "babel-polyfill"
import "./index.less"
import React from "react"
import ReactDOM from "react-dom"
import { AppContainer as HMRContainer } from "react-hot-loader"
import { Provider } from "react-redux"
import { HashRouter } from "react-router-dom"
import store from "store"
import quickClick from "quickclick"
import App from "components/app"

quickClick(document.body)

function render(Comp) {
  ReactDOM.render(
    <HMRContainer>
      <Provider store={store}>
        <HashRouter>
          <Comp />
        </HashRouter>
      </Provider>
    </HMRContainer>,
    document.getElementById("root"),
  )
}

render(App)

if (module.hot) {
  module.hot.accept("components/app", () => render(App))
}