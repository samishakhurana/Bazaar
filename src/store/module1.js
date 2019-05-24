import productAPI from '../productAPI/productAPI.js';
export default{
    state:{
        products : [],
        searchresults: [],
        userprofile: {}
    },
    getters: {
        getProducts: state=>state.products,
        getSearchProducts: state=>state.searchresults,
        getUserInfo: state=>state.userprofile
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
        },
        UPDATE_SEARCHPRODUCTS:(state, result)=>{
            state.searchresults=result
        },
        UPDATE_USERPROFILE:(state, result)=>(state, result)=>{
            state.userprofile=result
        },
    },
    actions:{
        fetchProducts:(context)=>{
            productAPI.getData((result)=>{
                console.log('response', result.data)
                context.commit('UPDATE_PRODUCTS',result.data)
            })
        },
        fetchSearchProducts:(context, searchtext)=>{
            productAPI.searchData(searchtext, (result)=>{
                console.log('response', result.data)
                context.commit('UPDATE_SEARCHPRODUCTS',result.data)
            })
        },
        fetchProfile:(context)=>{
            productAPI.getProfile( (result)=>{
                console.log('response', result.data)
                context.commit('UPDATE_USERPROFILE',result.data)
            })
        }
    }
}