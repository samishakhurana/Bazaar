import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from './views/LandingPage.vue'
import Search from './views/Search.vue'
import Profile from './views/Profile.vue'
import LoginSignup from './views/LoginSignup.vue'
import Checkout from './views/Checkout.vue'
import ProductDetails from './views/ProductDetails.vue'
import PaymentPage from './views/PaymentPage.vue'
import Home from './views/Home.vue'

Vue.use(Router)


const router = new Router({
  mode: 'history',
  routes:[
  {
    name:'landingpage',
    path:'/landingpage',
    component:LandingPage
  },
  {
    name:'search',
    path:'/search',
    component:Search,
    //props: true
  },
  {
    name:'profile',
    path:'/profile',
    component:Profile
  },
  {
    name:'loginsignup',
    path:'/loginsignup',
    component:LoginSignup
  },
  {
    name:'checkout',
    path:'/checkout',
    component:Checkout

  },
  {
    name:'productdetails',
    path:'/productdetails', 
    component:ProductDetails
  },
  {
    name:'paymentpage',
    path:'/paymentpage',
    component:PaymentPage
  }
]
})

export default router
