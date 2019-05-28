import makeApiCall from '../productAPI/makeAPICall.js'
import apiPath from '../productAPI/apiPaths.js'

export default{
    authenticate(callback,obj){
        makeApiCall.makePostRequest(apiPath.loginPath,callback,obj)
    },
    logout(callback, obj){
        makeApiCall.makeGetRequestGen(apiPath.logoutPath, callback, obj)
    }
}