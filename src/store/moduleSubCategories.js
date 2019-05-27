import productAPI from '../productAPI/productAPI.js'; 

export default {
    state: {
        categories: [],
        productsFromCategories: []
    },
    getters: {
        getCategories: (state) => state.categories,
        getproductsFromCategories:(state)=>state.productsFromCategories
        
    },
    mutations: {
        SET_CATEGORIES: (state,result) => {
            state.categories = result
        },
        SET_PRODUCTSFROMCATEGORIES:(state)=>{
            state.productsFromCategories = result
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
              context.commit('SET_PRODUCTSFROMCATEGORIES',result)
        },catname)
    }
 }
}