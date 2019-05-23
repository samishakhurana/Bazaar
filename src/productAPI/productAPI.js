import makeApiCall from './makeAPICall.js'
import apiPath from './apiPaths.js'

export default{
    getData(callback){
        makeApiCall.makeGetRequest(apiPath.getProductList, callback)
    }
}