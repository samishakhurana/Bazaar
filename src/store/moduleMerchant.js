import merchantApi from '../merchantAPI/merchantApi.js'; 

export default {
    state: {
        datalist: []
    },
    getters: {
        getData: (state) => state.datalist
        
    },
    mutations: {
        SET_DATA: (state,result) => {
            state.datalist = result
        }
        
    },
    actions: {
        getMerchantDetails: (context, pId) => {
            console.log('IN Merchant context', context, 'obj', obj)
            merchantApi.getMerchData((result) => {
                context.commit('SET_DATA',result.data)
            },pId)
        }
    }
 }