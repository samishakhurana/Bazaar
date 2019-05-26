import makeApiCall from '../productAPI/makeAPICall.js'
import apiPath from '../productAPI/apiPaths.js'

export default{
    transferPaymentDetails(callback,obj){
        makeApiCall.makePostRequest(apiPath.payment,callback,obj);
    }
}