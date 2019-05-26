import cartAPI from '../cartAPI/cartAPI.js'; 

export default {
    state: {
        result: ''
    },
    getters: {
        getResult: (state) => state.result    
    },
    mutations: {
        setResult: (state,result) => {
            state.result = result
        }
        
    },
    actions: {
        addToCart: (context, obj) => {
            console.log('context', context, 'obj', obj)
            cartAPI.addToCart((result) => {
                context.commit('setResult',result.data)
            },obj)
        },
        dataFromCart:(context,id)=>{
            cartAPI.getDataFromCart((result)=>{
                context.commit('setResult',result.data)
            },id)
        }
    }
 }