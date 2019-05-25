<template>
<div>
    <LogInHeader/>
    <b-container>
        <b-row class="details-row">
            <b-col class="details-col">
                <h3>Name: {{userpayload.userInfo.name}}</h3>
                <p>Username: {{userpayload.userInfo.uname}}</p>
                <p>E-mail: {{userpayload.userInfo.email}}</p>
                <!-- <p>Phone: {{userpayload.profile.phone}}</p> -->
            </b-col>
            <b-col>
                <div v-for="order in userpayload.orderHistory" v-bind:key="order.ordernumber">
                    {{order}}
                    {{prodlist[order.ordernumber]}}
                </div>
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
            prodlist: {}
        }
    },
    created(){
        this.$store.dispatch('fetchProfile');  
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
            for(let order in this.userpayload.orderHistory){
                let self = this;
                cartAPI.getSingleProduct((result) => {
                    self.prodlist[order.ordernumber] = result.data
                },{"id":3});
            }
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
</style>

