import Home  from '../components/router-demo/Home'
import News from '../components/router-demo/News'
import Product from '../components/router-demo/Product'
import NewsDetail from '../components/router-demo/News/NewsDetail'
import ProductDetail from '../components/router-demo/ProductDetail';
import Login from '../components/router-demo/Login';

let routes=[
    {
      path: "/",
      component: Home,
      exact: true
    },
    {
      path: "/news",
      component: News
    },
    {
      path: "/product",
      component: Product
    },
    {
      path: "/news-detail/:id",
      component: NewsDetail
    },
    {
      path: "/product-detail",
      component: ProductDetail
    },
    {
      path: "/login",
      component: Login
    }
  ]

  export default routes;