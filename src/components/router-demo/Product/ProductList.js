import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = { 

            title: "我是产品组件",
            list:[

                {
                    id: 111,
                    title: "产品111"
                },
                {
                    id: 222,
                    title: "产品222"
                },
                {
                    id: 333,
                    title: "产品333"
                }
            ]
         };
    }
    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>
                <hr/>
                {
                    this.state.list.map((value,key)=>{
                        return (
                            <li key={key}>
                                <Link to={`/product-detail?id=${value.id}`}>{value.title}</Link>
                            </li>
                        )
                    })
                }
            </div>
        );
    }
}

export default ProductList;