import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import ProductList from './Product/ProductList';
import ProductEdit from './Product/ProductEdit';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="content">
                <div className="left">
                    <Link to="/product">产品列表</Link>
                    <br/>
                    <br/>
                    <Link to="/product/edit">产品编辑</Link>
                </div>
                <div className="right">
                    <Route exact path="/product" component={ProductList}/>
                    <Route path="/product/edit" component={ProductEdit}/>
                </div>
            </div>
        );
    }
}

export default Product;