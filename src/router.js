import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from './views/LandingPage.vue'
import Search from './views/Search.vue'
import Profile from './views/Profile.vue'
import LoginSignup from './views/LoginSignup.vue'
import Checkout from './views/Checkout.vue'
import ProductDetails from './views/ProductDetails.vue'
import PaymentPage from './views/PaymentPage.vue'
import CartPage from './views/Cart.vue'
import ProductView from './views/ProductView.vue'

Vue.use(Router)


const router = new Router({
  mode: 'history',
  base: '/bazaar',
  routes:[
    {
      name:'root',
      path:'/',
      component:LandingPage
    },
  {
    name:'landingpage',
    path:'/landingpage',
    component:LandingPage
  },
  {
    name:'search',
    path:'/search',
    component:Search,
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
    path:'/productdetails/:id', 
    component: ProductDetails
  },
  {
    name:'paymentpage',
    path:'/paymentpage',
    component:PaymentPage
  },
  {
    name:'cart',
    path:'/mycart',
    component:CartPage
  },
  {
    name:'productview',
    path:'/productview/:name',
    component:ProductView
  }
]
})

export default router
