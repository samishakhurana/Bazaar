import axios from 'axios'

export default{
    makeGetRequest(path,callback){
        axios.get(path)
        .then(callback)
        .catch((error)=>{console.log(error)})
    }
}