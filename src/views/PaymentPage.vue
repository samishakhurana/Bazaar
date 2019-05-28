<template>
<div>
    <h2>Just one more step and your favourite products are yours!!</h2>
    <div class="center-div">
        <div v-if="check()">
        <label>Enter your emailsss</label><br>
        <input type="text" name="email" :placeholder="email"/><br>
        </div>
        <div v-else>
        <label>Enter your email</label><br>
        <input type="text" name="email"/><br>
        </div>
        <label>Enter your billing address</label><br>
        <textarea name="billingAddress" rows=3 cols=15 id="badd"></textarea><br>
        <label>Enter your shipping address</label><br>
        <textarea name="billingAddress" rows=3 cols=15 id="sadd"></textarea><br>
        <label>Enter your pincode</label><br>
        <input type="textarea" name="pincode"/><br>
        <label>Total amount to be paid: {{totalamount}} </label><br>
        <button class="btn btn-primary" type="submit" @click="payment()">Pay now</button><br>
    </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
    name:'PaymentPage',
    data(){
        return{
            paymentresult:{},
            uDetails:{},
            cartData:[],
            id:0,
            email:"",
            totalamount: 0
        }
    },
    created(){
        if(window.sessionStorage.length!=0){
        var id=JSON.parse(sessionStorage.getItem('userDetails')).payload.uid;
        var email=JSON.parse(sessionStorage.getItem('userDetails')).payload.email;
        }
        console.log(id);
        this.$store.dispatch('fetchCart', sessionStorage.getItem('userAccessToken'));
    },
    methods:{
        
        payment(){
            console.log("result of cart ",this.cartData)
            this.uDetails=JSON.parse(sessionStorage.getItem('userDetails')).payload;
            var temp={
                'orderdate':"2012-04-23T18:25:43.511+0000",
                'userId': this.uDetails.uid,
                'emailid': this.uDetails.email,
                'paymentoption':"Cash on Delivery",
                'billingaddress': document.getElementById("badd").value,
                'shippingaddress':document.getElementById("sadd").value,
                'productlist':this.cartData,
                'accesstoken': sessionStorage.getItem('userAccessToken')
            }
            console.log(temp);
            this.$store.dispatch('doPayment',temp);
        },
        check(){
            console.log("here in check");
            if(window.sessionStorage.length==0){
                return false;
            }
        }
    },
    computed:{
        ...mapGetters({
        doPayment: 'doPayment',
        getCartInfo:'getCartInfo',
       })
    },
    watch:{
        doPayment:function (newValue, oldValue) {
        this.paymentresult = newValue
        console.log('Payment Result', this.paymentresult);
      },
      getCartInfo:function(newValue, oldValue){
          this.cartData=newValue.payload.list
          console.log('Content from cart',this.cartData)
            for(let i = 0; i < this.cartData.length; i++){
                this.totalamount += (this.cartData[i].price)*(this.cartData[i].quantity)
                console.log("cart data "+i+" "+this.cartData[i])
            }
            console.log("totalamount" + this.totalamount)
      }
    }
}
</script>

<style>
    .center-div
{
  position: absolute;
  margin: auto;
  
  right: 0;
  bottom: 0;
  left: 0;
  width: 50%;
  height: 70%;
  background-color: #ccc;
  border-radius: 3px;
  scroll-padding-top: 200px;
}
</style>


