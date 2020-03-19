import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'antd';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: "我是首页组件"
         };
    }
    render() {
        return (
            <div>
                <Button type="primary">按钮组件</Button>
                <h2>{this.state.title}</h2>
                <hr/>
                <button><Link to="/login">跳转到登录页面</Link></button>
            </div>
        );
    }
}

export default Home;