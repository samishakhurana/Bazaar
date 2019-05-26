import makeApiCall from '../productAPI/makeAPICall.js'
import apiPath from '../productAPI/apiPaths.js'

export default{
    getMerchData(callback,pId){
        makeApiCall.makeGetRequestwithParamMerch(apiPath.getMerchantList, callback,pId)
    }
}