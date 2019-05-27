<template>
    <div>
        <b-container>
            <b-row v-for="item in cartlist" v-bind:key="item">
                <b-col><img :src="item.imgurl" alt="product image"></b-col>
                <b-col>
                    <p>{{item.productname}}</p>
                    <p>Quantity: {{item.quantity}}</p>
                    <p>Price: {{item.price}}</p>
                    <button @click="deleteFromCart(item)">Delete</button>
                </b-col>
            </b-row>
        </b-container>
        <Footer/>
    </div>
</template>

<script>
import LogInHeader from "../components/LogInHeader.vue";
import Footer from "../components/Footer.vue";
import {mapActions, mapGetters} from 'vuex';

export default {
    name:'CartPage',
    components: {
        LogInHeader,
        Footer
    },
    data(){
        return {
            cartlist: [],
        }
    },
    created(){
        this.$store.dispatch('fetchCart');  
    },
    methods: {
        ...mapActions(['fetchCart']),
        deleteFromCart: function(item){
            this.$store.dispatch('delFromCart', item);  
        }
    },
    computed : { 
       ...mapGetters({
        getCartInfo: 'getCartInfo'
       }) 
    },
    watch : {
      getCartInfo: function (newValue, oldValue) {
        if(newValue.status == "success"){
            this.cartlist = newValue.payload.list;
        }
      }
    }
}
</script>

