import React from 'react';
// import logo from './assets/images/logo.svg';
// import './assets/css/App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './assets/css/index.css';
import './assets/css/Common.css';
import routes from './config/routes';

function App() {
  return (
    <Router>
      <div>
        <header className="title">
          <Link to="/">首页</Link>
          <Link to="/news">新闻</Link>
          <Link to="/product">产品</Link>
        </header>

        <br/>
        <br/>
        <br/>
        {
          routes.map((route,key)=>{
            if(route.exact){
              return <Route key={key} path={route.path} exact
              
                render={props => (
                  // pass the sub-routes down to keep nesting
                  <route.component {...props} routes={route.routes} />
                )}
              
              />
            }else{
              return <Route key={key} path={route.path}
              
              render={props => (
                // pass the sub-routes down to keep nesting
                  <route.component {...props} routes={route.routes} />
              )}
              
              />
            }
          })
        }
      </div>
    </Router>
  );
}

export default App;
