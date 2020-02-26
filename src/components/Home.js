import React from 'react';
import '../assets/css/Home.css';

class Home extends React.Component{
    constructor(props){
        super(props);//必须调用super方法，否则会报错，props参数固定写法，用于父子传值

        //所有数据都定义在this.state中
        this.state={
            name:"张三",
            age:30,
            userinfo:{
                username:"李四"
            },
            title: 111,
            color: 'red',
            style:{
                "color": 'blue',
                "font-size":'20px'
            }
        };
    }

    render(){

        return (
        <div>
            <h2>你好，react，我是一个Home组件，react组件里的所有节点都要被根节点包含起来</h2>
            <div title={this.state.title}>我是一个div</div>
            <div className={this.state.color}>我是一个红色的div</div>
            <div>
                <label htmlFor="name">姓名</label>
                <input id="name"/>
            </div>
            <div style={{"color":"blue"}} >
                行内样式显示
            </div>
            <div style={this.state.style}>

                行内样式显示2
            </div>
        </div>
        )
    }

}

export default Home;