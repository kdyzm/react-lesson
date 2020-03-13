import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    constructor(props) {
        super(props);
        var title=this.props.title;
        this.state = { 
            title: title
        };
    }

    UNSAFE_componentWillReceiveProps(){
        console.log("Header UNSAFE_componentWillReceiveProps 函数执行");
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

Header.defaultProps={

    title: "我是默认头部信息"

}

Header.propTypes={
    title: PropTypes.string,
    num: PropTypes.number
}

export default Header;

