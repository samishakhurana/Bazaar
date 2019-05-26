import merchantApi from '../merchantAPI/merchantApi.js'; 

export default {
    state: {
        data: []
    },
    getters: {
        getData: (state) => state.data
        
    },
    mutations: {
        SET_DATA: (state,result) => {
            state.data = result
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