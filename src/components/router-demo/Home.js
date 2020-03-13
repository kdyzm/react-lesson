import React, { Component } from 'react';

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
                <h2>{this.state.title}</h2>
            </div>
        );
    }
}

export default Home;