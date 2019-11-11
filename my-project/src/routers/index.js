import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Tuijian from '../pages/Tuijian.vue'
import Redian from '../pages/Redian.vue'
import Yule from '../pages/Yule.vue'
import Detail from '../pages/Detail.vue'
import Detail2 from '../pages/Detail2.vue'
import Login from '../pages/Login.vue'
import Main from '../pages/Main.vue'
const routes = [
    {
        //在页面为http://localhost:8080/tuijian时，加载Tuijian页面
        path: '/main',
        name: 'main',
        component: Main,
        children: [
            //在页面为http://localhost:8080/redian时，加载Redian页面
            {
                path: 'tuijian',
                name: 'tuijian',
                // component:{
                //     default:Tuijian
                // },
                component: Tuijian,
                //别名
                alias: 'lan'
            },
            //在页面为http://localhost:8080/redian时，加载Redian页面
            {
                path: 'redian',
                name: 'redian',
                component: Redian
            },
            {
                path: 'yule',
                name: 'yule',
                component: Yule
            }
        ]
    },

    {
        path: '/detail/:id',
        name: 'detail',
        component: Detail
    },
    {
        path: '/detail2/:id',
        name: 'detail2',
        component: Detail2
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    //默认重定向
    {
        path: '/',
        redirect: '/main/tuijian'
    }
]

const router = new VueRouter({
    routes
})
//路由守卫
//进所有路由之前都要判断
// router.beforeEach((to, from, next) => {
//     //to将要去的路由
//     //from将要去的路由
//     //next函数，如果执行了，就往下通行
//     window.console.log(to, from, next)
//     //可做登录注册判断
//     if(window.sessionStorage.getItem('token')==='12345678' || to.name === 'login'){
//         next()
//     }else{
//         router.push({
//             //如果不成功回跳登录页
//             name:'login'
//         })
//     }

//   })
export default router