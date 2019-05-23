import productAPI from '/Users/samishakhurana/Desktop/ecommerce/web/src/productAPI/productAPI.js';
export default{
    state:{
        // imageURL:"",
        // name:"",
        // price:"",
        // category:"",

        products=null

    },
    getters: {
        // getImage: state => state.imageURL,
        // getName: state => state.name,
        // getPrice: state => state.price,
        // getCategory: state => state.getCategory

        getProducts: state=>state.products
    },
    mutations: {  
        // UPDATE_IMAGE_URL:(state,result)=>{
        //     state.imageURL=result;
        // },
        // UPDATE_NAME:(state,result)=>{
        //     state.name = result;
        // },
        // UPDATE_PRICE:(state,result)=>{
        //     state.price=result
        // },
        // UPDATE_CATEGORY:(state,result)=>{
        //     state.category=result
        // }
        UPDATE_PRODUCTS:(state,result)=>{
            state.products=result
        }
    },
    actions:{
        fetchProducts:(context)=>{
            productAPI.getData((result)=>{
                context.commit('UPDATE_PRODUCTS',result)
            })
        }

    }
    
}