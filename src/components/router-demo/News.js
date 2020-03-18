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
                {
                        this.props.routes.map((value,key)=>{
                            if(value.exact){
                                return <Route exact key={key} path={value.path}  component={value.component}/>
                                
                            }else{
                                return <Route key={key} path={value.path}  component={value.component}/>
                            }
                            
                        })
                    }
                </div>
            </div>
        );
    }
}

export default News;