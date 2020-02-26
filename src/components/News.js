import React from 'react';
import img from '../assets/images/kikyo.jpg';

class News extends React.Component{

    constructor(props){
        super(props);
        this.state={
            style:{
                "width":"400px"
            },
            list1:['1111111','2222222','333333','4444444'],
            list2:[<h2>这是一个h2标签</h2>,<h2>这是第二个h2标签</h2>],
            list3:[
                {
                    title:"你你你你你你"
                },
                {
                    title:"啊啊啊啊啊啊啊啊啊"
                },
                {
                    title:"呃呃呃呃呃呃呃呃呃"
                },
                {
                    title:"哒哒哒哒哒哒多多多"
                }
            ]
        }

    }

    render(){

        let list1v=this.state.list1.map(function(value,key){
        return <li key={key}>{value}</li>
        })

        return (
        <div>
            <div>
            <img style={this.state.style} src={require("../assets/images/kikyo.jpg")} alt="hello,kikyo"/>
            <img style={this.state.style} src={img} alt="hello,kikyo1"/>
            <img style={{"background":"blue"}} src="https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white-c4d7df0a00.png"/>
            </div>
            <hr/>
            {this.state.list2}
            <hr/>
            <ul>
                {list1v}
            </ul>
            <hr/>
            <ul>
            {
                this.state.list3.map(function(value,key){
                return <li key={key}>{value.title}</li>
                })
            }
            </ul>

        </div>
        )

    }

}


export default News;