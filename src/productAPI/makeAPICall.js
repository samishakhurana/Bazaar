import axios from 'axios'

export default{
    makeGetRequest(path,callback){
        axios.get(path)
        .then(callback)
        .catch((error)=>{console.log(error)})
    },
    makeGetRequestwithParam(path, query,callback){
        axios.get(path, {
            params: {
                "text": query
            }
        })
        .then(callback)
        .catch((error)=>{console.log(error)})
    }
}