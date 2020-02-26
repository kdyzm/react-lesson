import React, { Component } from 'react';

class News extends React.Component{

    constructor(props){
        super(props);//这里用于父子组件传值，当做固定写法

        this.state = {

            userinfo:"张三"
        }
    }

    render(){
        return (
        <div>
        <h2>{this.state.userinfo}</h2>
            <div>
                <ul>
                    <li>这是一个列表</li>
                    <li>这是一个列表</li>
                    <li>这是一个列表</li>
                    <li>这是一个列表</li>
                </ul>
            </div>
        </div>
        )

    }

}


export default News;