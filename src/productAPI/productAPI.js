import makeApiCall from './makeAPICall.js'
import apiPath from './apiPaths.js'

export default{
    getData(callback){
        makeApiCall.makeGetRequest(apiPath.getProductList, callback)
    },
    searchData(searchtext, callback){
        makeApiCall.makeGetRequestwithParam(apiPath.searchProductList, searchtext, callback)
    },
    getProfile(callback, params){
        makeApiCall.makeGetRequestGen(apiPath.getUserProfile, callback, params)
    },
    getFields(callback){
        makeApiCall.makeGetRequest(apiPath.getCategoriesList, callback)
    },
    getSubCategoryProducts(callback,name){
        makeApiCall.makeGetRequestwithParamProd(apiPath.getProdFromSubCat,callback,name)
    }
}