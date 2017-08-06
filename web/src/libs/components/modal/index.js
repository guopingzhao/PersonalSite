import React, {PureComponent} from "react"
import ReactDOM from "react-dom"
import cls from "classnames"
import { CLASS_PREFIX as cp } from "../const"
import "./styles.less"
export default class Modal extends PureComponent{
  render(){
    const {visible} = this.props
    if(visible) ReactDOM.render(this.renderModal(this.props.visible), this.wrapDiv)
    return null
  }
  
  componentWillMount() {
    this.wrapDiv = document.createElement("div")
  }
  componentDidMount() {
    const {wrap=document.body, visible} = this.props
    wrap.appendChild(this.wrapDiv)
  }
  componentWillReceiveProps({visible}) {
    if(visible !== this.props.visible)
      ReactDOM.render(this.renderModal(visible), this.wrapDiv)
  }
  
  componentWillUnmount() {
    const {wrap=document.body} = this.props
    wrap.removeChild(this.wrapDiv)
  }
    
  renderModal = (visible) => {
    const {cs, title, children, footer, maskCancel, onCancel, style, width, showClose} = this.props
    return (
      <div
        className={cls(
          `${cp}-modal-mask`,
          {
            [`${cp}-modal-mask-hide`]: !visible 
          }
        )}
        onClick={() => maskCancel && onCancel && onCancel()}
      >
        <div
          className={cls(`${cp}-modal`, cs)}
          style={{...style, width}}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="head">
            {title}
            {
              showClose && (
                <span
                  className="close"
                  onClick={() => onCancel && onCancel()}
                >
                  {showClose && "x"}
                </span>
              )
            }
          </div>
          <div className="content">
            {children}
          </div>
          {
            footer !== null && (
              <div className="footer">
                {footer || this.renderFooter()}
              </div>
            )
          }
        </div>
      </div>
    )
  }
  renderFooter = () => {
    const {onCancel, onOk, cancelText, okText} = this.props
    return (
      <div className="modal-default-footer">
        <button
          className="modal-btn cancel"
          onClick={onCancel}
        >
          {cancelText || "取消"}
        </button>
        <button
          className="modal-btn ok"
          onClick={onOk}
        >
          {okText || "确定"}
        </button>
      </div>
    )
  }
  static defaultProps = {
    maskCancel: true,
    showClose: true
  }
}