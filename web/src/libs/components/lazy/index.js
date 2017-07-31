import React, {PureComponent} from "react"
import * as lazyModules from "libs/lazy-modules"

export default class Lazy extends PureComponent {
  state = {
    modules: {},
  }

  render() {
    if (Object.keys(this.state.modules).length > 0) {
      return React.Children.only(this.props.children(this.state.modules))
    } else {
      return null
    }
  }

  componentDidMount() {
    this._mounted = true
    this.loadModules()
  }

  componentWillUnmount() {
    this._mounted = undefined
  }

  componentDidUpdate(prevProps, prevState) {
    const { modules } = this.props
    const { modules: prevModules } = prevProps
    const modulesDiffer = Object.keys(modules).some(
      k => modules[k] !== prevModules[k],
    )
    if (modulesDiffer) this.loadModules()
  }

  async loadModules() {
    try {
      const modules = await lazyModules.load(this.props.modules)
      this.setState({ modules })
    } catch (e) {
      // ignore, pass empty modules
    }
  }
}
