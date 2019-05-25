import makeApiCall from '../productAPI/makeAPICall.js'
import apiPath from '../productAPI/apiPaths.js'

export default{
    getData(callback,id){
        makeApiCall.makeGetRequest(apiPath.getMerchantList, callback)
    }
}