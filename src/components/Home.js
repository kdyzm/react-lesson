import React from 'react';

class Home extends React.Component{
    constructor(props){
        super(props);//必须调用super方法，否则会报错，props参数固定写法，用于父子传值

        //所有数据都定义在this.state中
        this.state={
            name:"张三",
            age:30,
            userinfo:{
                username:"李四"
            }
        };
    }

    render(){

        return (
        <div>//最外层一定要有个根节点即div
            <h2>你好，react，我是一个Home组件，react组件里的所有节点都要被根节点包含起来</h2>
        <p>姓名：{this.state.name}</p>
        <p>年龄：{this.state.age}</p>
        <p>对象：{this.state.userinfo.username}</p>
        </div>
        )
    }

}

export default Home;