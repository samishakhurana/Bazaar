import makeApiCall from '../productAPI/makeAPICall.js'
import apiPaths from '../productAPI/apiPaths.js'

export default{
    updateUser(callback,obj){
        makeApiCall.makePostRequest(apiPaths.signupPath,callback,obj)
    }
}