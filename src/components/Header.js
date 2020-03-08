import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        var title=this.props.title;
        this.state = { 

            title: title
        };
    }

    run=()=>{
        alert("我是Header组件的run方法");
    }

    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>
            </div>
        );
    }
}

export default Header;

