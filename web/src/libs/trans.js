import React from "react"
import {FormattedMessage} from "react-intl"

export default function trans(id, values=[]) {
    let valueMap = values.reduce((a, b, i) => {
        return Object.assign(a, {[i]: b})
    }, {})
    return (<FormattedMessage
        id={id}
        values={valueMap}
            />)
}