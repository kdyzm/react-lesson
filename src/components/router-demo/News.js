import React, { Component } from 'react';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: "我是新闻组件"
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

export default News;