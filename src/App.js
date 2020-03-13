import React from 'react';
// import logo from './assets/images/logo.svg';
// import './assets/css/App.css';
import Home  from './components/router-demo/Home'
import News from './components/router-demo/News'
import Product from './components/router-demo/Product'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './assets/css/index.css';
import './assets/css/Common.css';

function App() {
  return (
    <Router>
      <div>
        <header className="title">
          <Link to="/">首页</Link>
          <Link to="news">新闻</Link>
          <Link to="product">产品</Link>
        </header>

        <br/>
        <br/>
        <br/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/news" component={News}/>
        <Route exact path="/product" component={Product}/>
      </div>
    </Router>
  );
}

export default App;
