import makeApiCall from '../productAPI/makeAPICall.js'
import apiPath from '../productAPI/apiPaths.js'

export default{
    authenticate(callback,obj){
        makeApiCall.makePostRequest(apiPath.loginPath,callback,obj)
    },
    logout(callback){
        makeApiCall.makeGetRequestwithoutParam(apiPath.logoutPath, callback)
    }
}