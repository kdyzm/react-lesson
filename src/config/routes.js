import Home  from '../components/router-demo/Home'
import News from '../components/router-demo/News'
import Product from '../components/router-demo/Product'
import NewsDetail from '../components/router-demo/News/NewsDetail'
import ProductDetail from '../components/router-demo/ProductDetail';
import Login from '../components/router-demo/Login';
import ProductList from '../components/router-demo/Product/ProductList';
import ProductEdit from '../components/router-demo/Product/ProductEdit';
import NewsList from '../components/router-demo/News/NewsList';
import NewsEdit from '../components/router-demo/News/NewsEdit';

let routes=[
    {
      path: "/",
      component: Home,
      exact: true
    },
    {
      path: "/news",
      component: News,
      routes:[
          {
              path: "/news/list",
              component: NewsList
          },
          {
              path: "/news/edit",
              component: NewsEdit
          }
      ]
    },
    {
      path: "/product",
      component: Product,
      routes:[
          {
              path: "/product",
              component: ProductList,
              exact: true
          },
          {
              path: "/product/edit",
              component: ProductEdit
          }
      ]
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