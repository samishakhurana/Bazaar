import merchantApi from '../merchantAPI/merchantApi.js'; 

export default {
    state: {
        data: ''
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
        getMerchantDetails: (context, id) => {
            console.log('context', context, 'obj', obj)
            merchantApi.getData((result) => {
                context.commit('SET_DATA',result)
            },id)
        }
    }
 }