import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: "我是新闻组件",
            list:[

                {
                    id:111,
                    title: "新闻111111"
                },
                {
                    id:2222,
                    title: "新闻2222"
                },
                {
                    id:333,
                    title: "新闻3333"
                },
                {
                    id:444,
                    title: "新闻4444"
                }
            ]
         };
    }
    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>
                <hr/>
                <ul>
                {
                    this.state.list.map((value,key)=>{
                        return (
                            <li key={key}>
                                <Link to={`/news-detail/${value.id}`}>{value.title}</Link>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        );
    }
}

export default News;