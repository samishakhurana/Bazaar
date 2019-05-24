<template>
<div>
    <LogInHeader/>
    <b-container>
        <b-row>
            <b-col>
                <h3>Name: {{userinfo.name}}</h3>
                <p>Username: {{userinfo.username}}</p>
                <p>E-mail: {{userinfo.email}}</p>
                <p>Phone: {{userinfo.phone}}</p>
                <div>
                    <p>Addresses:</p>
                    <b-card v-for="address in userinfo.address" v-bind:key="address"><b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text></b-card>
                </div>
            </b-col>
            <b-col>

            </b-col>
        </b-row>
    </b-container>
</div>
</template>
<script>
import LogInHeader from '../components/LogInHeader.vue';
import {mapActions, mapGetters} from 'vuex'

export default {
    name:'Profile',
    data(){
        return {
            userinfo: {}
        }
    },
    created(){
        this.$store.dispatch('fetchUserInfo');  
    },
    watch: {
      getUserInfos: function (newValue, oldValue) {
        this.userinfo = newValue;
      }
    },
    methods: {
        ...mapActions(['fetchProfile'])
    },
    computed : { 
       ...mapGetters({
        getUserInfos: 'getUserInfo'
       }) 
    },
}
</script>
