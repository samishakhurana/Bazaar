<template>
<div>
    <b-container class="product-container">
        <div v-for="item in prodList" :key="item.id">
            <SearchProductDesc :productdata="item"/>
        </div>
    </b-container>
</div>    
</template>
<script>
import LogInHeader from '../components/LogInHeader.vue';
import SearchProductDesc from '../components/SearchProductDesc.vue';
import {mapActions, mapGetters} from 'vuex'
export default {
    name:'Search',
    data(){
        return {
            textvalue: '',
            prodList: []
        }
    },
    components: {
        LogInHeader,
        SearchProductDesc,
    },
    created(){
        this.textvalue = this.$route.query.q;// this.text;
        this.$store.dispatch('fetchSearchProducts', this.$route.query.q);
    },
    watch : {
     '$route' (to, from) {
      // react to route changes...
      console.log('******to', to)
      console.log('******from', from)
      this.$store.dispatch('fetchSearchProducts', to.query.q);
      },
      getSearchProduct: function (newValue, oldValue) {
          if(newValue.status == "success"){
              this.prodList = newValue.payload.prodlist
          }
      }
    },
    computed : { 
       ...mapGetters({
        getSearchProduct: 'getSearchProducts'
       }) 
    },
    methods: {
        ...mapActions(['fetchSearchProducts'])
    },
    props: {
    //    text: {type: String, required: true}
    }
}
</script>
<style scoped>
.product-container {
    margin: 20px;
}
</style>
