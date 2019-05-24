import makeApiCall from '/Users/samishakhurana/Desktop/ecommerce/web/src/productAPI/makeAPICall.js'
import apiPath from '/Users/samishakhurana/Desktop/ecommerce/web/src/productAPI/apiPaths.js'

export default{
    getSingleProduct(callback, id){
        makeApiCall.makeGetRequest(apiPath.getSingleProduct, callback, id)
    },

    addToCart(callback,obj){
        makeApiCall.makePostRequest(apiPath.addToCart,callback,obj)
    }
}