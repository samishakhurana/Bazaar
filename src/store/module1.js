import productAPI from '/Users/samishakhurana/Desktop/ecommerce/web/src/productAPI/productAPI.js';
export default{
    state:{
        products : []
    },
    getters: {
        getProducts: state=>state.products
    },
    mutations: {  
        UPDATE_PRODUCTS:(state,result)=>{
            state.products=result
        }
    },
    actions:{
        fetchProducts:(context)=>{
            productAPI.getData((result)=>{
                console.log('response', result.data)
                context.commit('UPDATE_PRODUCTS',result.data)
            })
        }

    }
    
}