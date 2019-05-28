import loginApi from '../loginApi/loginApi.js'; 

export default {
    state: {
        finalResult: {},
        logoutresult: {}
    },
    getters: {
        getFinalResult: (state) => state.finalResult,
        getLogoutResult: (state) => state.logoutresult
        
    },
    mutations: {
        SET_RESULT: (state,result) => {
            state.finalResult = result
        },
        SET_LOGOUTRESULT: (state, result) => {
            state.logoutresult = result
        }
    },
    actions: {
        checkLogin: (context, obj) => {
            console.log('context', context, 'obj', obj)
            loginApi.authenticate((result) => {
                context.commit('SET_RESULT',result.data)
            },obj)
        },
        logoutuser: (context, token) => {
            console.log("logging out");
            loginApi.logout((result) => {
                context.commit("SET_LOGOUTRESULT", result.data)        
            }, {"accesstoken": token})
        }
    }
 }