import axios from 'axios'

export default{
    makeGetRequest(path,callback, params){
        let query = ''
        if(params) {
            query = '?id='+params.id
        }
        axios.get(path+query)
        .then(callback)
        .catch((error)=>{console.log(error)})
    },
    makeGetRequestwithParam(path, query, callback){
        axios.get(path, {
            params: {
                "text": query
            }
        })
        .then(callback)
        .catch((error)=>{console.log(error)})
    },
    makePostRequest(path,callback,obj) {
        axios.post(path,obj)
            .then(callback)
            .catch((error) => { console.log(error) })
    },
    makeGetRequestwithParamMerch(path,callback,params_in){
        axios.get(path, {
            params: {
                "pId": params_in.id
            }
        })
        .then(callback)
        .catch((error)=>{console.log(error)})
    },
    makeGetRequestwithParamCart(path,callback,params_in){
        axios.get(path, {
            params: {
                "id": params_in.id
            }
        })
        .then(callback)
        .catch((error)=>{console.log(error)})
    }
}