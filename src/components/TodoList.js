import React from 'react'

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
        this.setState({
            todo: e.target.value
        })
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
            <div>
                <h2>{this.state.title}</h2>
                <hr/>
                <input value={this.state.todo} onChange={this.handleTodo}/>

                <h3>待做事项：</h3>
                <ul>
                    {
                        this.state.list
                        .map((value,key)=>{
                            if(!value.checked){
                                return (
                                    <li key={key}>
                                        <input type="checkbox" checked={value.checked} onChange={this.handleChange.bind(this,key)}/>{value.name}--
                                        <input type="button" value="删除" onClick={this.handleDelete.bind(this,key)}/>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>

                <h3>已完成事项：</h3>
                <ul>
                    {
                        this.state.list
                        .map((value,key)=>{
                            if(value.checked){
                                return (
                                    <li key={key}>
                                        <input type="checkbox" checked={value.checked} onChange={this.handleChange.bind(this,key)}/>{value.name}--
                                        <input type="button" value="删除" onClick={this.handleDelete.bind(this,key)}/>
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