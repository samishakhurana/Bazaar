<template>
<div>
    <h2>Just one more step and your favourite products are yours!!</h2>
    <div class="center-div">
        <label>Enter your email</label><br>
        <input type="text" name="email"/><br>
        <label>Enter your billing address</label><br>
        <textarea name="billingAddress" rows=3 cols=15 id="badd"></textarea><br>
        <label>Enter your shiping address</label><br>
        <textarea name="billingAddress" rows=3 cols=15 id="sadd"></textarea><br>
        <label>Enter your pincode</label><br>
        <input type="textarea" name="pincode"/><br>
        <label>Total amount to be paid </label><br>
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
            id:0
        }
    },
    created(){
        var id=JSON.parse(sessionStorage.getItem('userDetails')).payload.uid;
        console.log(id);
        this.$store.dispatch('dataFromCart',id);
    },
    methods:{
        payment(){
            this.uDetails=JSON.parse(sessionStorage.getItem('userDetails')).payload;
            var temp={
                'orderdate':"2012-04-23T18:25:43.511+0000",
                'userId': this.uDetails.uid,
                'emailid': this.uDetails.email,
                'paymentoption':"Cash on Delivery",
                'billingaddress': document.getElementById("badd").value,
                'shippingaddress':document.getElementById("sadd").value,
                'productlist':this.cartData
            }
            console.log(temp);
            //this.$store.dispatch('doPayment',temp);
        }
    },
    computed:{
        ...mapGetters({
        doPayment: 'doPayment',
        getDataFromCart:'getDataFromCart'

       })
    },
    watch:{
        doPayment:function (newValue, oldValue) {
        this.paymentresult = newValue
        console.log('Payment Result', this.paymentresult);
      },
      getDataFromCart:function(newValue, oldValue){
          this.cartData=newValue
          console.log('Content from cart',this.cartData)
      }
    }
}
</script>

<style>
    .center-div
{
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 50%;
  height: 70%;
  background-color: #ccc;
  border-radius: 3px;
}
</style>


