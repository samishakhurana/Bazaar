import makeApiCall from '../productAPI/makeAPICall.js'
import apiPath from '../productAPI/apiPaths.js'

export default{
    getSingleProduct(callback, id){
        makeApiCall.makeGetRequest(apiPath.getSingleProduct, callback, id)
    },

    addToCart(callback,obj){
        makeApiCall.makePostRequest(apiPath.addToCart,callback,obj)
    },
    getCartDetails(callback){
        makeApiCall.makeGetRequestwithoutParam(apiPath.getCart, callback)
    },
    deleteFromCart(callback, obj){
        makeApiCall.makePostRequest(apiPath.deleteFromCart, callback, obj)
    }
}