import cartAPI from '../cartAPI/cartAPI.js'; 

export default {
    state: {
        data: '',
        multidata: []
    },
    getters: {
        getProduct: (state) => state.data
        
    },
    mutations: {
        SET_DATA: (state,result) => {
            state.data = result.data
        },
        ADD_DATA: (state, result) => {
            state.multidata.push(result);
        }
        
    },
    actions: {
        fetchSingleProduct: (context,id) => {
            cartAPI.getSingleProduct((result) => {
                context.commit('SET_DATA',result)
            },id)
        },
        fetchMultipleProduct: (context, id) => {
            cartAPI.getSingleProduct((result) => {
                context.commit('ADD_DATA',result)
            },id)
        }
    }
 }