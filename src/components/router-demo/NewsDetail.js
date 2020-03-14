import React, { Component } from 'react';

class NewsDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: "新闻详情",
            id:""
         };
    }
    componentDidMount(){
        var id=this.props.match.params.id;
        this.setState({
            id: id
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>
                <hr/>
                id为{this.state.id}的新闻详情
            </div>
        );
    }
}

export default NewsDetail;