import React, { PureComponent } from "react"

export default class Lazy extends PureComponent {
    state = {
        module: null
    }

    render() {
        const { module } = this.state
        if (!module) return null
        return this.props.children(module)
    }

    componentWillMount() {
        this.load(this.props.load)
    }
    componentWillReceiveProps({ load }) {
        if (this.props.load !== load) {
            this.load(load)
        }
    }

    load = async (load) => {
        this.state.module = null
        let type = typeof load
        let module = null
        switch (type) {
        case "function":
            module = await load()
            break
        case "string":
            module = await require("components/chat-room").default
            break
        case "object":
            module = await load
            break
        }
        this.setState({
            module: module.default ? module.default : module
        })
    }
}
