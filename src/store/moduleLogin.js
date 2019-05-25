import loginApi from '../loginApi/loginApi.js'; 

export default {
    state: {
        finalResult: {}
    },
    getters: {
        getFinalResult: (state) => state.finalResult
        
    },
    mutations: {
        SET_RESULT: (state,result) => {
            state.finalResult = result
        }
        
    },
    actions: {
        checkLogin: (context, obj) => {
            console.log('context', context, 'obj', obj)
            loginApi.authenticate((result) => {
                context.commit('SET_RESULT',result.data)
            },obj)
        }
    }
 }