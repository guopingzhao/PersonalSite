import React, {PureComponent} from "react"
import {withRouter, Route, Switch} from "react-router-dom"
import {connect} from "react-redux"
import {IntlProvider, addLocaleData} from "react-intl"
import en from "react-intl/locale-data/en"
import zh from "react-intl/locale-data/zh"
import my from "react-intl/locale-data/my"
import localeData from "libs/langs"

addLocaleData([...en, ...zh])

import Lazy from "libs/components/lazy"


const Home = (props) => (<Lazy load={() => import(/*webpackChunkName: "home"*/"components/home")}>{(Home) => <Home {...props} />}</Lazy>)
const Blog = (props) => (<Lazy load={import(/*webpackChunkName: "blog"*/"components/blog")}>{(Blog) => <Blog {...props} />}</Lazy>)
const ChatRoom = (props) => (<Lazy load="components/chat-room">{(ChatRoom) => <ChatRoom {...props} />}</Lazy>)

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
            <IntlProvider
                locale={locale}
                messages={localeData[locale]}
            >
                <Switch>
                    <Route
                        path="/home"
                        component={Home}
                    />
                    <Route
                        path="/blog"
                        component={Blog}
                    />
                    <Route
                        path="/chat"
                        component={ChatRoom}
                    />
                </Switch>
            </IntlProvider>
        )
    }
    componentDidMount() {
        const {replace, location, push} = this.props.history
        if (location.pathname.replace(/^\//, "")) {
            replace(location)
        } else {
            push("/home")
        }
    }
}
