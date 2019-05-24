<template>
<div>
    <LogInHeader />
    <SlideShow />
    <div class="product-list">
        <div v-for="item in prodLIST" :key="item.productId">
            <MinimalProductDesc :title="item.name" :imageUrl="item.imageUrl" :description="item.subCategory"/>
        </div>
    </div>
</div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
import LogInHeader from '../components/LogInHeader.vue';
import SlideShow from '../components/SlideShow.vue';
import MinimalProductDesc from '../components/MinimalProductDesc.vue';
export default {
    name:'LandingPage',
    components:{
        LogInHeader,
        SlideShow,
        MinimalProductDesc
    },
    methods: {
      ...mapActions(['fetchProducts'])
    },
    data () {
        return {
           prodLIST: []
        }
    },
    created () {
      console.log('++++', this.$store)
      this.$store.dispatch('fetchProducts')
    },
    mounted () {

    },
    computed : { 
       ...mapGetters({
        getProduct: 'getProducts'
       }) 
    },
    watch : {
      getProduct: function (newValue, oldValue) {
        console.log('new value', newValue)
        this.prodLIST = newValue
      }
    }
}
</script>
<style>
  .product-list {
      display: flex;
      flex-wrap: wrap;
      padding: 0px 90px
  }
</style>

