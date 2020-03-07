import React from 'react'

import '../assets/css/TodoList.css'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "待办事项管理",
            todo: "",
            list:[
                {
                    name:"吃饭",
                    checked: true
                },
                {
                    name: "睡觉",
                    checked: false
                },
                {
                    name: "打豆豆",
                    checked: true
                },
                {
                    name: "学习",
                    checked: false
                },
                {
                    name: "看书",
                    checked: false
                },
            ]

        };
    }

    handleTodo=(e)=>{
        console.log(e.keyCode)
        if(e.keyCode==13){
            var todo = this.refs.todo.value;
            var list=this.state.list;
            list.push({
                name: todo,
                checked: false
            });
            this.setState({
                todo: list
            })
            this.refs.todo.value = "";
        }
    }

    handleChange=(key)=>{
        var list=this.state.list;
        list[key].checked = !list[key].checked;
        this.setState({
            list: list
        })
    }

    handleDelete=(key)=>{
        var list=this.state.list;
        list.splice(key,1);
        this.setState({
            list:list
        })
    }
    render() {
        return (
            <div className="wrapper">
                <h2 className="title">{this.state.title}</h2>
                <hr/>
                回车完成输入：<input className="todoInput" ref="todo" onKeyUp={this.handleTodo}/>

                <h3>待做事项：</h3>
                <ul className="todo">
                    {
                        this.state.list
                        .map((value,key)=>{
                            if(!value.checked){
                                return (
                                    <li key={key}>
                                        <input className="checkbox" type="checkbox" checked={value.checked} onChange={this.handleChange.bind(this,key)}/>{value.name}
                                        <input class="delete" type="button" value="删除" onClick={this.handleDelete.bind(this,key)}/>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>

                <h3>已完成事项：</h3>
                <ul className="done">
                    {
                        this.state.list
                        .map((value,key)=>{
                            if(value.checked){
                                return (
                                    <li key={key}>
                                        <input className="checkbox" type="checkbox" checked={value.checked} onChange={this.handleChange.bind(this,key)}/>{value.name}
                                        <input class="delete" type="button" value="删除" onClick={this.handleDelete.bind(this,key)}/>
                                    </li>
                                )
                            }
                            
                        })
                    }
                </ul>
            </div>
            
        );
    }
}

export default TodoList;