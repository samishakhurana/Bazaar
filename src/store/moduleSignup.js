import signupApi from '../signupAPI/signupApi.js'; 

export default {
    state: {
        status: {}
    },
    getters: {
        getStatus: (state) => state.status
        
    },
    mutations: {
        SET_STATUS: (state,result) => {
            state.status = result
        }
        
    },
    actions: {
        addUser: (context, obj) => {
            console.log('context', context, 'obj', obj)
            signupApi.updateUser((result) => {
                context.commit('SET_STATUS',result.data)
            },obj)
        }
    }
 }