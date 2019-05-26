import productAPI from '../productAPI/productAPI.js'; 

export default {
    state: {
        categories: []
    },
    getters: {
        getCategories: (state) => state.categories
        
    },
    mutations: {
        SET_CATEGORIES: (state,result) => {
            state.categories = result
        }
        
    },
    actions: {
        getAllSubCategories: (context) => {
            productAPI.getFields((result) => {
                context.commit('SET_CATEGORIES',result.data)
            })
        }
    }
 }