<template>
<div>
    <b-container>
        <b-row class="details-row">
            <b-col class="details-col" cols="6">
                <div v-if="userpayload.userInfo">
                <h3>Name: {{userpayload.userInfo.name}}</h3>
                <p>Username: {{userpayload.userInfo.uname}}</p>
                <p>E-mail: {{userpayload.userInfo.email}}</p>
                <p>Phone: {{userpayload.userInfo.phoneno}}</p>
                </div>
                <div>
                    Addresses:
                    <p v-for="address in userpayload.addressList" v-bind:key="address">
                        {{address}}
                    </p>
                </div>
            </b-col>
            <b-col cols="6">
                <b-container>
                <b-row class="details-row" v-for="order in userpayload.orderHistory" v-bind:key="order.ordernumber">
                    <b-col>
                        <img class="prod-image" :src="order.imgurl" alt="some image">
                    </b-col>
                    <b-col class="details-col">
                        <p><span>Product Name: </span><span>{{order.productname}}</span></p>
                        <p><span>Billing address: </span><span>{{order.billingaddress}}</span></p>
                        <p><span>Shipping address: </span><span>{{order.shipingaddress}}</span></p>
                        <p><span>Total price: </span><span>{{order.total}}</span></p>
                        <p><span>Order date: </span><span>{{order.orderdate}}</span></p>                            
                    </b-col>
                </b-row>
                </b-container>
            </b-col>
        </b-row>
    </b-container>
</div>
</template>
<script>
import LogInHeader from '../components/LogInHeader.vue';
import {mapActions, mapGetters} from 'vuex';
import cartAPI from '../cartAPI/cartAPI.js'; 


export default {
    name:'Profile',
    data(){
        return {
            userpayload: {},
        }
    },
    created(){
        if(sessionStorage.getItem('userAccessToken'))
            this.$store.dispatch('fetchProfile', sessionStorage.getItem('userAccessToken'));  
        else
            alert("You need to login to view your profile")
    },
    methods: {
        ...mapActions(['fetchProfile'])
    },
    computed : { 
       ...mapGetters({
        getUserInfos: 'getUserInfo'
       }) 
    },
    watch : {
      getUserInfos: function (newValue, oldValue) {
        if(newValue.status == "success"){
            this.userpayload = newValue.payload;
        }
      }
    },
    components: {
        LogInHeader,
    }
}
</script>
<style scoped>
.details-col {
    text-align: left;
}
.details-row {
    margin-top: 40px;
}
.prod-image {
    height: 300px;
    width: 300px;
}
</style>

