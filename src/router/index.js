
import VueRouter from "vue-router";
import Home from '../components/pages/v-home'
import  VWoodenHouse from '../components/pages/v-wooden-house'
import  VOnTheIsland from '../components/pages/v-on-the-island'
export default  new VueRouter({
    routes:[
        {
            path:'/',
            component: Home
        },
        {
            path:'/v-wooden-house',
            component: VWoodenHouse

        },
        {
            path:'/v-on-the-island',
            component: VOnTheIsland

        }
    ],
    mode:'history'
})


