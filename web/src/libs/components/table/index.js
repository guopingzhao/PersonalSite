import React, { PureComponent } from "react"
import update from "react/lib/update"
import PropTypes from "prop-types"
import cls from "classnames"
import { CLASS_PREFIX as cp } from "../const"
import "./styles.less"

import Page from "../page"
import Tooltip from "../tooltip"

export default class Table extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: [],
            selectRow: {},
            headSelect: props.headCheckedKeys || {},
            showSizeOption: false,
            selectAll: false,
            focus: "",
            editTd: ""
        }
    }
    render() {
        const { cs, pageConfig, dataSource, column, type } = this.props
        return (
            <div className={cls(`${cp}-table`, {
                "line-table": type === "line",
                "menu-table": type === "menu"
            }, cs)}
            >
                <div className={`${cp}-table-warp`}>
                    <table>
                        <thead className={`${cp}-table-thead`}>
                            {this.createHead()}
                        </thead>
                        <tbody className={`${cp}-table-tbody`}>
                            {this.createBody()}
                        </tbody>
                    </table>
                </div>
                <div className={`${cp}-table-error`}>{dataSource.length > 0 ? null : column.length > 0 ? "没有相关数据" : null}</div>
                <div className={`${cp}-table-tpage`}>
                    {pageConfig && dataSource.length > 0 && <Page {...pageConfig} />}
                </div>
            </div>
        )
    }
    createHead() {
        const { column = [], multiselect, title, isHeadChecked, showThTitle, serial } = this.props,
            { headSelect } = this.state
        let first = []
        if (multiselect) {
            const { selectRow, dataSource: { length } } = this.state
            const sellen = Object.keys(selectRow).length
            first.push(
                <th
                    className={`${cp}-table-th`}
                    key="th"
                >
                    <div
                        className={cls("wrap", {
                            "half-select": sellen && sellen < length,
                            "whole-select": sellen && sellen === length
                        })}
                        onClick={this.onSelectAll}
                    />
                </th>
            )
        }
        if (serial) {
            const sellen = Object.keys(headSelect).length
            first.push(
                (
                    <th
                        className={cls(`${cp}-table-th`, { select: isHeadChecked })}
                        key="serial"
                    >
                        {
                            isHeadChecked && (
                                <div
                                    className={cls("head-checked", {
                                        "half-select": sellen && sellen < column.length,
                                        "whole-select": sellen && sellen === column.length
                                    })}
                                    onClick={() => this.selectAllHead()}
                                />
                            )
                        }
                        <span>序号</span>
                    </th>
                )
            )
        }
        let head = (column || []).map((v, i) => {
            let val = v.title || v[title] || v
            return (
                <th
                    className={cls(`${cp}-table-th`, { select: isHeadChecked })}
                    key={v.key || i}
                >
                    {
                        isHeadChecked && (
                            <div
                                className={cls("head-checked", {
                                    "whole-select": headSelect[val]
                                })}
                                onClick={() => this.selectHead(v)}
                            />
                        )
                    }
                    <Tooltip title={showThTitle && showThTitle(v)}>
                        <span className="head-text">
                            {val}
                        </span>
                    </Tooltip>
                </th>
            )
        })
        return (<tr className={`${cp}-table-thead-tr`}>{first.concat(head)}</tr>)
    }

    createBody() {
        const { dataSource } = this.state,
            { onClick } = this.props
        return dataSource.map((v, i) => {
            const click = onClick ? { onClick: (e = window.event) => onClick(v, e) } : {}
            return (
                <tr
                    className={`${cp}-table-tbody-tr`}
                    key={i}
                    onContextMenu={(e = window.event) => { this.onContextMenu(e, v) }}
                    {...click}
                >
                    {this.createRow(v, i)}
                </tr>
            )
        })
    }
    createRow(data, i) {
        const { column, multiselect, serial } = this.props
        let first = []
        if (multiselect) {
            const { selectRow = this.state.selectRow } = this.props
            first.push(
                <td
                    className={`${cp}-table-td`}
                    key="td"
                >
                    <div
                        className={cls("wrap", { "whole-select": selectRow[i] })}
                        onClick={() => this.onSelect(data, i)}
                    />
                </td>
            )
        }
        if (serial) {
            first.push(
                <td
                    className={`${cp}-table-td`}
                    key="td"
                >
                    <span>{i + 1}</span>
                </td>
            )
        }
        let row = column.map((v, j) => {
            let { key, dataIndex, render } = v
            return (
                <td
                    className={cls(`${cp}-table-td`, {focus: `${i},${j}` === this.state.focus})}
                    key={key || dataIndex || j}
                    onDoubleClick={() => this.doubleClickTD(i, j)}
                    onClick={()=>this.onTdFocus(`${i},${j}`)}
                >
                    {
                        this.state.editTd === `${i},${j}`
                            ? (
                            <input
                                autoFocus
                                className={`${cp}-table-td-input`}
                                defaultValue={`${data[dataIndex] || data[j]}`}
                                onBlur={(e) => this.tdInputBlur(e, data)}

                            />
                        )

                            :
                            <span className={`${cp}-table-td-span`}>{render ? render.call(this, data) : `${data[dataIndex] || data[j]}`}</span>
                    }
                </td>
            )
        })
        return first.concat(row)
    }

    onSelect = async (data, i) => {
        const { selectRow } = this.state
        if (selectRow[i]) {
            let data = { ...selectRow }
            delete data[i]
            await this.setState({
                selectRow: data
            })
        } else {
            await this.setState({
                selectRow: update(selectRow, {
                    [i]: {
                        $set: {
                            index: i,
                            data
                        }
                    }
                })
            })
        }
        this.selectedChange()
    }
    onSelectAll = async () => {
        const { selectRow, dataSource } = this.state
        if (Object.keys(selectRow).length === dataSource.length) {
            await this.setState({
                selectRow: {}
            })
        } else {
            await this.setState({
                selectRow: dataSource.reduce((x, y, i) => (
                    Object.assign(x, { [i]: y })
                ), {})
            })
        }
        this.selectedChange()
    }
    selectedChange() {
        const { onSelect } = this.props
        if (onSelect) onSelect(this.state.selectRow)
    }
    selectHead = async (v) => {
        const { headSelect } = this.state,
            { title, headCheckedChange } = this.props,
            key = v.title || v[title] || v
        if (headSelect[key]) {
            let newHeadSelect = Object.assign({}, headSelect)
            if (delete newHeadSelect[key]) {
                await this.setState({
                    headSelect: newHeadSelect
                })
            }
        } else {
            await this.setState({
                headSelect: update(headSelect, {
                    [key]: {
                        $set: v
                    }
                })
            })
        }
        if (headCheckedChange) headCheckedChange(this.state.headSelect)
    }
    selectAllHead = async () => {
        const { headSelect } = this.state,
            { column = [], title, headCheckedChange } = this.props
        if (Object.keys(headSelect).length === column.length) {
            await this.setState({ headSelect: {} })
        } else {
            await this.setState({
                headSelect: column.reduce((x, y) => {
                    return Object.assign(x, { [y.title || y[title]]: y })
                }, {})
            })
        }
        if (headCheckedChange) headCheckedChange(this.state.headSelect)
    }
    onContextMenu = (e, data) => {
        const { rightClickMenu } = this.props
        if (rightClickMenu) {
            e.preventDefault()
            e.stopPropagation()
            rightClickMenu(data, { x: e.pageX, y: e.pageY })
        }
    }
    onTdFocus = (xy) => {
        const {isEdit} = this.props
        if(isEdit){
            this.setState({
                focus: xy
            })
        }
    }
    doubleClickTD = (x, y) =>{
        if(this.state.focus === `${x},${y}`){
            this.setState({
                editTd: `${x},${y}`
            })
        }

    }
    tdInputBlur =({target: {value}}, data) =>{
        const {onTdblur} = this.props
        this.setState({
            editTd: ""
        })
        if(onTdblur) onTdblur(value, data)
    }
    componentDidMount() {
        this.setState({
            dataSource: this.props.dataSource
        })
    }
    componentWillReceiveProps(nextProps) {
        const { dataSource, headCheckedKeys } = nextProps
        if (dataSource !== this.props.dataSource) {
            this.setState({
                dataSource
            })
        }
        if (headCheckedKeys && headCheckedKeys !== this.props.headCheckedKeys) {
            this.setState({
                headSelect: headCheckedKeys
            })
        }
    }
    static defaultProps = {
        dataSource: [],
        type: "menu"
    }
    static propTypes = {
        dataSource: PropTypes.arrayOf(            //表格数据
            PropTypes.oneOfType([
                PropTypes.array,
                PropTypes.object
            ])
        ).isRequired,
        column: PropTypes.array.isRequired,       //表头信息以及渲染方式
        type: PropTypes.oneOf(                    //table类型
            ["menu", "line"]                        //menu可配置右键交互型， line数据展示型
        ),
        rightClickMenu: PropTypes.func,           //右键回调
        serial: PropTypes.bool,                   //是否显示序号
        title: PropTypes.string,                  //指定title字段,所有title是固定字段时使用
        multiselect: PropTypes.bool,              //是否可以选择行
        selectRow: PropTypes.object,              //哪些行被选中
        onSelect: PropTypes.func,                 //行被选中或取消时执行,返回被选中的行
        isHeadChecked: PropTypes.bool,            //表头是否可选
        headCheckedKeys: PropTypes.object,        //哪些表头被选中
        headCheckedChange: PropTypes.func,        //表头被选中或取消时执行,返回被选中的表头
        pageConfig: PropTypes.object              //分页配置，参照Page组件
    }
}