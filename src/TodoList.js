import React, { Component, Fragment } from 'react';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
    }

    render() {
        let closeStyle = {
            fontSize: '1.2em',
            color: 'deepskyblue',
            marginLeft: '10px'
        }
        return (
            <Fragment>
                <div>
                    {/* 单项数据绑定 */}
                    <input
                        type="text"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map( (item, index) => {
                            return <li key={index}>
                                <span>{index}. {item}</span>
                                <span style={closeStyle} onClick={this.handleItemDelete.bind(this, index)}>X</span>
                            </li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    handleInputChange(e) {
        console.log(e.target.value);
        this.setState({
            inputValue: e.target.value
        })
    }

    // 方法体 - 点击提交
    handleBtnClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    // 方法体 - 删除项目
    handleItemDelete(index) {
        const list = [...this.state.list];
        list.splice(index, 1);

        this.setState({
            list: list
        })
    }
}

export default TodoList;