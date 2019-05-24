import makeApiCall from './makeAPICall.js'
import apiPath from './apiPaths.js'

export default{
    getData(callback){
        makeApiCall.makeGetRequest(apiPath.getProductList, callback)
    },
    searchData(searchtext, callback){
        makeApiCall.makeGetRequestwithParam(apiPath.searchProductList, searchtext, callback)
    },
    getProfile(callback){
        makeApiCall.makeGetRequest(apiPath.getUserProfile, callback)
    }
}