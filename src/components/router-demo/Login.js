import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loginFlag: false
         };
    }

    submit=(e)=>{
        e.preventDefault();
        var name=this.refs.name.value;
        var password=this.refs.password.value;

        if(name==="admin" && password ==="123"){
            //跳转首页
            this.setState({
                loginFlag: true
            })
        }else{
            alert("账号或者密码错误");
        }

    }
    render() {
        if(this.state.loginFlag){
            return <Redirect to="/"/>    
        }
        return (
            <div>    
                <form onSubmit={this.submit}>
                    姓名：<input ref="name"/><br/><br/>

                    密码：<input ref="password"/>
                    <br/><br/>
                    <input type="submit" value="提交"/>
                </form>
            </div>
        );
    }
}

export default Login;