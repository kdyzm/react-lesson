import React from 'react';

class FormTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            titile: "react表单",
            name: "小明",
            sex: 1,
            city: '上海',
            cities:[
                "北京",
                "上海",
                "天津"
            ],
            hobbies:[
                {
                    name: "吃饭",
                    checked: false
                },
                {
                    name: "睡觉",
                    checked: true
                },
                {
                    name: "打豆豆",
                    checked: false
                }
            ],
            comment: "默认备注"
        };
    }

    handleSubmit=(e)=>{
        e.preventDefault();//阻止默认提交的行为
        console.log("姓名",this.state.name);
        console.log("性别",this.state.sex);
        console.log("城市",this.state.city);
        console.log("爱好",this.state.hobbies);
        console.log("备注",this.state.comment)
    }
    handleName=(e)=>{
        this.setState({
            name: e.target.value
        })
    }

    handleSex=(e)=>{
        this.setState({
            sex: e.target.value
        })
    }

    handleCity=(e)=>{
        this.setState({
            city: e.target.value
        })
    }

    handleHobby=(e,key)=>{
        var hobby=this.state.hobbies;
        hobby[key].checked = !hobby[key].checked;
        this.setState({
            hobbies: hobby
        })
    }

    handleComment=(e)=>{
        this.setState({
            comment: e.target.value
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.titile}</h2>
                <hr/>
                <form onSubmit={this.handleSubmit}>
                    姓名：<input value={this.state.name} onChange={this.handleName}/>
                    <br/><br/>
                    性别：男<input type="radio" value="1" checked={this.state.sex == 1} onChange={this.handleSex}/>
                        女<input type="radio" value="2" checked = {this.state.sex == 2} onChange={this.handleSex}/>
                    <br/>
                    <br/>
                    城市：
                    <select value={this.state.city} onChange={this.handleCity}>
                        {
                            this.state.cities.map((value,key)=>{
                                return (
                                    <option key={key}>
                                        {value}
                                    </option>
                                )
                            })
                        }
                    </select>
                    <br/>
                    <br/>
                    爱好：
                    
                        {
                            this.state.hobbies.map((value,key)=>{
                                return (
                                    <span key={key}>
                                        <input type="checkbox" checked={value.checked} onChange={this.handleHobby.bind(this,key)}/> {value.name}                    
                                    </span>
                                )
                            })
                        }
                    <br/>
                    <br/>
                    <textarea value={this.state.comment} onChange={this.handleComment}/>
                    <br/>
                    <br/>
                    <input type="submit" value="提交"/>
                </form>
            </div>
        );
    }
}

export default FormTest;