import React, { Component } from 'react';
import Header from './Header';

class LifeCycle extends Component {
    constructor(props) {
        console.log("constructor 函数执行");
        super(props);
        this.state = { 
            msg: 'react生命周期函数测试',
            flag: true
        };
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate 函数执行");
        return true;
    }

    UNSAFE_componentWillUpdate(){
        console.log("UNSAFE_componentWillUpdate 函数执行");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate 函数执行");
    }

    UNSAFE_componentWillMount (){
        console.log("UNSAFE_componentWillMount 函数执行");
    }

    componentDidMount(){
        console.log("componentDidMount 函数执行");
    }


    componentWillUnmount(){
        console.log("componentWillUnmount 函数执行");
    }

    updateMsg=()=>{
        this.setState({
            msg: "这是改变之后的值"
        })
    }

    updateFlag=()=>{
        var flag=!this.state.flag;
        this.setState({
            flag: flag
        })
    }

    render() {
        console.log("render 函数执行");
        return (
            <div>
                {
                    this.state.flag?<Header titil='LifeCycle传值给Header'/>:""
                }
                {
                    this.state.flag?<button onClick={this.updateFlag}>卸载头部组件</button>:<button onClick={this.updateFlag}>加载头部组件</button>
                }
                <h2>{this.state.msg}</h2>
                <hr/>
                <button onClick={this.updateMsg}>更新msg数据</button>

            </div>
        );
    }
}

export default LifeCycle;