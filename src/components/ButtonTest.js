import React from 'react';
import '../assets/css/Common.css';

class ButtonTest extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            msg:"我是一个Button组件"
        }
        this.run2 = this.run2.bind(this);
    }


    run(){
        alert("Hello,World");
    }

    run1(){
        alert(this.state.msg);
    }

    run2(){
        alert(this.state.msg);
    }
    run3=()=>{
        alert(this.state.msg);
    }
    run4=()=>{
        this.setState(
            {
                msg: "我是一个Button组件 这是改变后的值",
                text: "默认值"
            }
        )
    }
    run5=(msg)=>{
        this.setState({
            msg: msg
        })
    }

    eventTest=(e)=>{
        console.log(e.target);
        console.log(e.target.getAttribute("aid"))
    }

    textChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            text: e.target.value
        })
    }


    textChangeRef=()=>{
        this.setState({
            text: this.refs.name.value
        })
    }

    textSubmit=(e)=>{
        alert(this.state.text);
    }

    keyUp = (e)=>{
        console.log(e.keyCode)
        if(e.keyCode === 13){
            alert(e.target.value)
        }
    }

    changeText1 = (e)=>{
        this.setState({
            msg: e.target.value
        })
    }

    changeText2 = ()=>{
        this.setState({
            msg: '默认值测试'
        })
    }
    
    render(){

        return(

            <div>
                <h2>{this.state.msg}</h2>
                <hr/>
                <input type="button" onClick={this.run} value="Hello,world"></input>
                <hr/>
               
                <button onClick={this.run1.bind(this)}> 获取数据：第一种改变this指向的方法</button>
                <br/>
                <br/>
                <button onClick={this.run2}> 获取数据：第二种改变this指向的方法</button>
                <br/>
                <br/>
                <button onClick={this.run3}> 获取数据：第三种改变this指向的方法</button>
                <br/>
                <br/>
                <button onClick={this.run4}> 修改state的值</button>
                <br/>
                <br/>
                <button onClick={this.run5.bind(this,'我是一个Button组件：运行方法传值')}> 修改state的值：运行方法传值</button>


                <hr/>
                <br/>
                <button aid="aid测试" onClick={this.eventTest}>事件对象测试</button>
                <br/>
                <br/>
                <hr/>
                <br/>
                使用targetValue获取表单中的值：
                <input onChange={this.textChange}/>    <button onClick={this.textSubmit}>提交</button>
                <br/>
                <br/>
                使用refs获取表单中的值：<input ref="name" onChange={this.textChangeRef}/>    <button onClick={this.textSubmit}>提交</button>
                <br/>
                <br/>
                <hr/>
                <br/>
                键盘事件，回车获取表单中的值：
                <input onKeyUp={this.keyUp} />
                <br/>
                <hr/>
                <br/>

                <h2>{this.state.msg}</h2>
                实现类似于VUE中的双向数据绑定：
                <input value={this.state.msg} onChange={this.changeText1}/> <button onClick={this.changeText2}> 恢复默认值 </button>

            </div>
        )
    }
}

export default ButtonTest;