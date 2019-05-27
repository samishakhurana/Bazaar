import productAPI from '../productAPI/productAPI.js'; 

export default {
    state: {
        categories: [],
        productsFromCategories: []
    },
    getters: {
        getCategories: (state) => state.categories,
        productsFromCategories:(state)=>state.productsFromCategories
        
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
        },
        getProductsBySubCategory:(context,catname)=>{
            productAPI.getSubCategoryProducts((result)=>{
                context.commit('')
            })
        }
    }
 }