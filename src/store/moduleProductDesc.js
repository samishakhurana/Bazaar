import cartAPI from '../cartAPI/cartAPI.js'; 

export default {
    state: {
        data: ''
    },
    getters: {
        getProduct: (state) => state.data
        
    },
    mutations: {
        SET_DATA: (state,result) => {
            state.data = result.data
        }
        
    },
    actions: {
        fetchSingleProduct: (context,id) => {
            cartAPI.getSingleProduct((result) => {
                context.commit('SET_DATA',result)
            },id)
        }
    }
 }