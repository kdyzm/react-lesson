import React, { Component } from 'react';
import url from 'url'
import { useParams } from 'react-router-dom'
class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: "产品详情页",
            id: ""
         };
    }
    componentDidMount(){
        console.log(url.parse(this.props.location.search,true));
        var id=url.parse(this.props.location.search,true).query.id;
        this.setState({
            id: id
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>
                <hr/>
                这是id为{this.state.id}的产品详情

            </div>
        );
    }
}

export default ProductDetail;