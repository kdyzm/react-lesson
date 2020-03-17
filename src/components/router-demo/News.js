import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import NewsList from './News/NewsList';
import NewsEdit from './News/NewsEdit';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        }
    }
    render() {
        return (
            <div className="content">
                <div  className="left">
                    <Link to="/news/list">新闻列表</Link>
                    <br/>
                    <br/>
                    <Link to="/news/edit">新闻编辑</Link>
                </div>
                <div className = "right">
                    <Route path="/news/list" component={NewsList}/>
                    <Route path="/news/edit" component={NewsEdit}/>
                </div>
            </div>
        );
    }
}

export default News;