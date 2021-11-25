import Vue from "vue";
import VueRouter from 'vue-router'
const Home=()=>import('../views/home/Home')
const Cate=()=>import('../views/cate/Cate')
const Cart=()=>import('../views/cart/Cart')
const My=()=>import('../views/my/My')
const ListView=()=>import('../components/common/listview/ListView')
const Detail=()=>import('../views/detail/Detail')
Vue.use(VueRouter)
const router=new VueRouter({
      routes:[{
        path:'',
        redirect:'/home'
      },{
        path:'/home',
        component:Home
      },
        {
          path: '/cart',
          component: Cart
        },
        {
          path: '/cate',
          component: Cate
        },
        {
          path: '/my',
          component: My
        },
        {
          path: '/listview',
          component:ListView
        },{
        path: '/detail/:id',
        component:Detail
        }
      ]
})
export default router
