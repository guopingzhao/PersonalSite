import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import cls from "classnames"
import { CLASS_PREFIX as cp } from "../const"
import "./styles.less"

export default class RightMenu extends PureComponent {
    state = {
        visible: false,
        x: 0,
        y: 0
    }
    createMenu() {
        let { menus, info } = this.props
        return menus.map((v, i) => {
            return (
                <div
                    key={i}
                    onClick={(e = window.event) => {v.click(info, e)}}
                    className={`${cp}-menu-item`}
                >
                    <span className={`icon icon-${v.icon}`} />
                    <span className="text">{v.text}</span>
                </div>
            )
        })
    }
    render() {
        const { cs, children, onCancel } = this.props,
            {x, y} = this.state
        return (
            this.state.visible
                ? (
                    <div
                        className={`${cp}-menu-wrap`}
                        onClick={onCancel}
                        ref={(ele) => this.menu = ele}
                    >
                        <div
                            className={cls(`${cp}-menu`, cs)}
                            style={{
                                left: x,
                                top: y
                            }}
                        >
                            {children || this.createMenu()}
                        </div>
                    </div>
                )
                : null
        )
    }
    componentWillReceiveProps({ visible, menus, x, y }) {
        this.setState({
            visible,
            y: menus.length * 32 + y > window.innerHeight ? y - menus.length * 32 : y,
            x: 160 + x > window.innerWidth ? x - 160 : x
        })
    }

    static defaultProps = {
        visible: false,
        x: 0,
        y: 0
    }

    static propTypes = {
        visible: PropTypes.bool,        //控制是否渲染菜单
        x: PropTypes.number,            //菜单相对设备x轴的位置
        y: PropTypes.number,            //菜单相对设备y轴的位置
        menus: PropTypes.arrayOf(       //菜单列表
            PropTypes.shape({
                text: PropTypes.any,        //菜单显示内容
                icon: PropTypes.oneOfType([ //菜单图标class,须引入图标库
                    PropTypes.number,
                    PropTypes.string
                ]),
                click: PropTypes.func       //点击菜单时回调
            })
        ),
        info: PropTypes.any             //菜单回调所需信息
    }
}
