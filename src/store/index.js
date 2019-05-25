import Vue from 'vue'
import Vuex from 'vuex'
import module1 from './module1.js'
import moduleProductDesc from './moduleProductDesc.js'
import moduleAddToCart from './moduleAddToCart.js'
import moduleLogin from './moduleLogin.js'
import moduleMerchant from './moduleMerchant.js'
import moduleSignup from './moduleSignup.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        module1,
        moduleProductDesc,
        moduleAddToCart,
        moduleLogin,
        moduleMerchant,
        moduleSignup
    }
})