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
    componentDidMount(){
        console.log(this.props.routes);
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
                    {
                        this.props.routes.map((value,key)=>{
                            if(value.exact){
                                return <Route exact key={key} path={value.path}  component={value.component}/>
                                
                            }else{
                                return <Route key={key} path={value.path}  component={value.component}/>
                            }
                            
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Product;