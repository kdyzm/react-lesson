import React, { Component } from 'react';
import axios from 'axios';

class AxiosDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news:[

            ]

        };
    }

    axiosGet=()=>{
        axios.get('http://rap2.taobao.org:38080/app/mock/246551/react-demo/news-list')
        .then((res)=>{
            var data=res.data;
            if(data.status === 0){
                this.setState({
                    news: data.data
                })
                return;
            }
            alert(JSON.stringify(data));
            
        })
        .catch((error)=>{
            console.error(error);
        })
        .finally(()=>{
            console.log('执行完成请求');
        })
    }
    render() {
        return (
            <div>
                <h2>axios使用</h2>
                <button onClick={this.axiosGet}>点击GET</button>
                <ol>
                {
                    this.state.news.map((value,key)=>{
                        return (
                            <li key={key}>{value}</li>
                        )
                    })
                    
                }
                </ol>
            </div>
        );
    }
}

export default AxiosDemo;