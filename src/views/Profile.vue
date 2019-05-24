<template>
<div>
    <LogInHeader/>
    <b-container>
        <b-row class="details-row">
            <b-col class="details-col">
                <h3>Name: {{userinfo.name}}</h3>
                <p>Username: {{userinfo.uname}}</p>
                <p>E-mail: {{userinfo.email}}</p>
                <p>Phone: {{userinfo.phone}}</p>
            </b-col>
            <b-col>

            </b-col>
        </b-row>
    </b-container>
</div>
</template>
<script>
import LogInHeader from '../components/LogInHeader.vue';
import {mapActions, mapGetters} from 'vuex';

export default {
    name:'Profile',
    data(){
        return {
            userinfo: {}
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
        this.userinfo = newValue;
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

