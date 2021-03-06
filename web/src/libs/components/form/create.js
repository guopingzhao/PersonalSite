import React, { PureComponent } from "react"
const { Children: { map }, cloneElement: clone } = React
import cls from "classnames"
import { read, write, assign } from "../../util/objTool"
import validates from "./utils/validators"

import "./create.less"

export default function create(options = {}) {
  const { globalRules, mapProps, onValuesChange } = options
  return (Com) => {
    return class L extends PureComponent {
      rules = {}
      childNum = {}
      initialValues = {}
      mapProps = {}
      fields = new Set()
      isWrapItem = new Map()
      constructor(props) {
        super(props)
        if (mapProps) {
          this.mapProps = mapProps(props)
        }
        this.state = {
          errors: {},
          values: this.mapProps.formValues || {}
        }
      }
      form = {
        getFieldsValue: (fields) => {
          return fields
            ? read(this.state.values, fields)
            : this.state.values
        },
        getFieldValue: (field) => {
          return read(this.state.values, `${field}`)
        },
        setFieldsValue: (values) => {
          this.setState({
            values: assign(this.state.values, values)
          })
        },
        setFields: (values = {}, errors = {}) => {
          this.setState({
            values: assign(this.state.values, values),
            errors: assign(this.state.errors, errors),
          })
        },
        validateFields: (fields, cb) => {
          return new Promise((res) => {
            let type = typeof fields
            switch (type) {
            case "function": {
              let errors = {},
                {values} = this.state,
                allField = Array.from(this.fields)
              for (let v of Object.keys(this.rules)) {
                if (this.childNum[v]) {
                  for (let i = 0, len = this.childNum[v]; i < len; i++) {
                    if (this.fields.has(`${v}.${i}`)){
                      errors[`${v}.${i}`] = validates(read(this.rules, `${v}`), read(values, `${v}.${i}`))                      
                    }
                  }
                } else {
                  if (this.fields.has(`${v}`)){
                    errors[`${v}`] = validates(read(this.rules, `${v}`), read(values, `${v}`))
                  }
                }
              }
              this.setState({
                errors
              }, () => {
                let result = Object.values(errors).some(v => v)
                let resVal = read(values, allField)
                if (result) {
                  fields(errors, resVal)
                } else {
                  fields(null, resVal)
                }

              })
              break
            }
            case "object": {
              let errors = read(this.state.errors, fields)
              for (let v of Object.keys(fields)) {
                if (this.childNum[v]) {
                  for (let i = 0, len = this.childNum[v]; i < len; i++) {
                    errors[`${v}.${i}`] = validates(read(this.rules, `${v}`, read(this.state.values, `${v}.${i}`)))
                  }
                } else {
                  errors[`${v}`] = validates(read(this.rules, `${v}`, read(this.state.values, `${v}`)))
                }
              }
              this.setState({
                errors: Object.assign(this.state.errors, errors)
              }, () => {
                let result = Object.values(errors).some(v => v),
                  fieldValues = read(this.state.values, fields)
                if (result) {
                  cb(errors, fieldValues)
                } else {
                  cb(null, fieldValues)
                }
              })
              break
            }
            default: {
              let errors = {},
                {values} = this.state,
                allField = Array.from(this.fields)
              for (let v of Object.keys(this.rules)) {
                if (this.childNum[v]) {
                  for (let i = 0, len = this.childNum[v]; i < len; i++) {
                    if (this.fields.has(`${v}.${i}`)){
                      errors[`${v}.${i}`] = validates(read(this.rules, `${v}`), read(values, `${v}.${i}`))                      
                    }
                  }
                } else {
                  if (this.fields.has(`${v}`)){
                    errors[`${v}`] = validates(read(this.rules, `${v}`), read(values, `${v}`))
                  }
                }
              }
              this.setState({
                errors
              }, () => {
                let result = Object.values(errors).some(v => v)
                let resVal = read(values, allField)
                if (result) {
                  res({ err: errors, values: resVal })
                } else {
                  res({ err: null, values: resVal })
                }
              })
            }
            }
          })
        },
        validateField: (id, value, i) => {
          let valResult = validates(read(this.rules, `${id}`, []), value)
          this.setState({
            errors: write(this.state.errors, `${id}${i}`, valResult, { reduce: true })
          })
          console.warn(`${id}${i}`, value, valResult)
        },
        getFieldError: (field) => {
          return read(this.state.errors, `${field}`)
        },
        getFieldsError: (fields) => {
          return fields
            ? read(this.state.errors, fields)
            : this.state.errors
        },
        getErrorInfo: (id, message, ErrorCom) => {
          let errorInfo = read(this.state.errors, `${id}`)
          if (errorInfo && errorInfo.length) {
            return (
              ErrorCom
                ? <ErrorCom info={message || errorInfo.reduce((x, { message }) => `${x ? `${x  },` : x}${message}`, "")} />
                : message || errorInfo.reduce((x, { message }) => `${x ? `${x  },` : x}${message}`, "")
            )
          }
        },
        resetFields: (fields) => {
          if (fields) {
            this.setState({
              values: write(this.state.values, fields, read(this.initialValues, fields))
            })
          } else {
            this.setState({ values: this.initialValues })
          }
        },
        initFields: () => {
          this.fields = new Set()
        },
        getFieldDecorator: (id, options = {}) => {
          const {
						rules,
            allow,
            message,
            errorCom,
            initialValue,
            wrapClass = "",
            ignoreRules = [],
            valueName = "value",
            trigger = "onChange",
            validateTrigger = "onChange"
          } = options
          let isReuired = false

          if (!this.isWrapItem.has(`${id}`)) {
            this.isWrapItem.set(`${id}`, false)
          }

          if (initialValue && read(this.initialValues, `${id}`) !== initialValue) {
            if (Array.isArray(initialValue)) {
              if (initialValue.length) this.initialValue = write(this.initialValue, `${id}`, initialValue)
            } else {
              this.initialValue = write(this.initialValue, `${id}`, initialValue)
            }
          }

          if (rules || globalRules) {
            let allRules = Array.from(new Set((globalRules || []).concat(rules || []).filter(v => !ignoreRules.some(i => i === v))))
            this.rules[`${id}`] = allRules
            isReuired = allRules.some((v) => {
              let type = typeof v
              switch (type) {
              case "string":
                return v === "require"
              case "object":
                return v.rule === "require"
              default:
                return false
              }
            })

          }
          return (Coms) => {
            if (Array.isArray(Coms)) {
              this.childNum[`${id}`] = Coms.length
            }
            return Array.isArray(Coms)
              ? Coms.map((Com, i) =>
                this.cloneChild(
                  Com,
                  {
                    id,
                    wrapClass,
                    valueName,
                    trigger,
                    validateTrigger,
                    allow,
                    message,
                    errorCom,
                    isReuired
                  },
                  `.${i}`
                )
              )
              :
                this.cloneChild(
                  Coms,
                  {
                    id,
                    wrapClass,
                    valueName,
                    trigger,
                    validateTrigger,
                    allow,
                    message,
                    errorCom,
                    isReuired
                  },
                  ""
                )

          }
        }
      }
      onValueChange = (id, i, value, data, allow) => {
        this.setState({
          values: write(this.state.values, `${id}${i}`, value)
        }, () => {
          if (data && allow) {
            for (let [k, v] of Object.entries(data)) {
              this.state.values = write(this.state.values, `${k}`, v)
            }
          }
          if (onValuesChange) onValuesChange.call(this.ele, this.props, this.state.values)
        })
      }
      cloneChild = (Com, { id, wrapClass, valueName, trigger, validateTrigger, allow, message, errorCom, isReuired }, i) => {
        const { type, props } = Com
        if (type && props) {
          if (typeof type === "function" || ["input", "select", "textarea"].some(v => v === type)) {
            this.fields.add(`${id}${i}`)
            if (read(this.state.values, `${id}${i}`) === undefined) {
              this.state.values = write(this.state.values, `${id}${i}`, read(this.initialValue, `${id}${i}`))
            }
            const { onChange, onBlur } = props,
              messageRes = this.form.getErrorInfo(`${id}${i}`, message, errorCom)
            return (
              <div
                data-isRequired={isReuired}
                data-message={() => {
                  this.isWrapItem.set(`${id}`, true)
                  return messageRes
                }}
                className={cls(wrapClass, "decorator-wrap", {
                  "validate-error": read(this.state.errors, `${id}${i}`)
                })}
              >
                {
                  clone(Com, {
                    [valueName]: read(this.state.values, `${id}${i}`),
                    onChange: async (e = window.event, data) => {
                      let value = e.target ? read(e, "target.value") : e
                      if (trigger === "onChange") {
                        await this.onValueChange(id, i, value, data, allow)
                      }
                      if (onChange) onChange(e, data)
                      if (validateTrigger === "onChange") {
                        this.form.validateField(id, value, i)
                      }
                    },
                    onBlur: async (e = window.event, data) => {
                      let value = read(e, "target.value", { defaultValue: e })
                      if (trigger === "onBlur") {
                        await this.onValueChange(id, i, value, data, allow)
                      }
                      if (onBlur) onBlur(e, data)
                      if (validateTrigger === "onBlur") {
                        this.form.validateField(id, value, i)
                      }
                    },
                    className: cls("validate-error-child", props.className)
                  })
                }
                {
                  !this.isWrapItem.get(`${id}`) && (
                    <div className="error-info">
                      {messageRes}
                    </div>
                  )
                }
              </div>
            )
          } else {
            return clone(
              Com,
              {},
              this.cloneNode(props.children, { id, wrapClass, valueName, trigger, validateTrigger, allow, message, errorCom }, i)
            )
          }
        } else {
          return Com
        }
      }
      cloneNode = (childs, { id, wrapClass, valueName, trigger, validateTrigger, allow, message, errorCom }, i) => {
        return map(childs, (Com) => this.cloneChild(Com, { id, wrapClass, valueName, trigger, validateTrigger, allow, message, errorCom }, i))
      }
      render() {
        return (
          <Com
            {...this.props}
            form={{ ...this.form }}
            {...this.mapProps}
            ref={(ele) => this.ele = ele}
          />
        )
      }
    }
  }
}