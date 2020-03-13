import React, { Component } from 'react';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = { 

            title: "我是产品组件"
         };
    }
    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>

            </div>
        );
    }
}

export default Product;