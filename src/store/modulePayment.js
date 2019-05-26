import paymentApi from '../paymentApi/paymentApi.js'; 

export default {
    state: {
        details: {}
        
    },
    getters: {
        getDetails: (state) => state.details
        
    },
    mutations: {
        SET_DATA: (state,result) => {
            state.details = result.data
        }
        
    },
    actions: {
        doPayment: (context,obj) => {
            paymentApi.transferPaymentDetails((result) => {
                context.commit('SET_DATA',result)
            },obj)
        },
    }
 }