<template>
    <div>
        <b-container class="cdata">
            <b-row v-for="item in cartlist" v-bind:key="item.mId">
                <!-- <div v-if="this.check(item)"> -->
                <b-col><img :src="item.imgurl" alt="product image" id="cartImage"></b-col>
                <b-col>
                    <p>{{item.productname}}</p>
                    <p>Quantity: {{item.quantity}}</p>
                    <p>Price: {{item.price}}</p>
                    <button @click="deleteFromCart(item)">Delete</button>
                    <hr>
                </b-col>
                <!-- </div> -->
            </b-row>
        </b-container>
        <b-button variant="primary" @click="buyNow">Buy Now</b-button>
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
            deletedCart: []
        }
    },
    created(){
        if(sessionStorage.getItem('userAccessToken'))
            this.$store.dispatch('fetchCart', sessionStorage.getItem('userAccessToken'));  
    },
    methods: {
        ...mapActions(['fetchCart']),
        deleteFromCart: function(item){
            item.accesstoken = sessionStorage.getItem("userAccessToken")? sessionStorage.getItem("userAccessToken"): null
            this.$store.dispatch('delFromCart', {payload: item, success: this.itemDeleted});     
        },
        buyNow(){
            this.$router.push({name:"paymentpage"});
        },
        itemDeleted(item) {
         console.log('itemDeleted', item)
         this.cartlist.forEach((el,index)=>{
             if(item.productId === el.productId) {
                          console.log('itemDeleted', item)

                this.cartlist.splice(index, 1)
             }
         })
        }
    },
    computed : { 
       ...mapGetters({
        getCartInfo: 'getCartInfo',
        getDelInfo: 'getDelInfo'
       }),
       check(item){
            for(var i=0;i<this.deletedCart.length;i++){
                if(this.deletedCart[i]==item){
                    return false;
                }
                
            }
            return true;

        }, 
    },
    watch : {
      getCartInfo: function (newValue, oldValue) {
        if(newValue.status == "success"){
            this.cartlist = newValue.payload.list;
        }
            //document.location.reload();
        },
        getDelInfo: function(newValue,oldValue){
            this.deletedCart=newValue;
            console.log("deleted ",this.deletedCart);
        }
    
      }
    }

</script>

<style>
.cdata{
    padding: 20px;
}

#cartImage{
    height: 200px;
    width: 200px;
}
</style>


