import cartAPI from '../cartAPI/cartAPI.js'; 

export default {
    state: {
        cartdata: {},
        deldata: []
    },
    getters: {
        getCartInfo: (state) => state.cartdata,
        getDelInfo: (state) => state.deldata   
    },
    mutations: {
        setCartData: (state,result) => {
            state.cartdata = result
        },
        setDelData: (state,result) => {
            state.deldata.push(result)
        },  
    },
    actions: {
        fetchCart: (context, token) => {
            console.log("cart access token "+token)
            cartAPI.getCartDetails((result) => {
                context.commit('setCartData',result.data)
            }, {"accesstoken": token})
        },
        delFromCart: (context, {payload, success}) => {
            cartAPI.deleteFromCart((result) => {
                console.log("result of deletion " , result.data);
                if(result.data == "success")
                    console.log("here");
                    success(payload)
                    context.commit('setDelData', payload)
            }, payload)
        }
    }
 }