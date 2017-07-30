import React, {PureComponent} from "react"

export default class Lazy extends PureComponent {
  state = {
    modules: null
  }
  render() {
    const {modules} = this.state
    return modules ? this.props.children(modules, this.props) : null
  }

  componentWillMount() {
    this.load(this.props)
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.load !== this.props.load) this.load(nextProps)
  }
  
  load = (props) => {
    this.state.modules = null
    props.load().then((modules) => {
      this.setState({
        modules: modules.default
          ? modules.default
          : modules
      })
    })
  }
}