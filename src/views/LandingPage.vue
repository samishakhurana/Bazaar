<template>
<div>
    <img src="https://neilpatel.com/wp-content/uploads/2015/04/ecommerce.jpg" class="mainImage">
    <!-- <h2>:imageUrl="item.imageUrl[1]"</h2> -->
    <h2>Our Best Sellers</h2>
    <div class="product-list">
        <div v-for="item in prodLIST" :key="item.productId">
            <MinimalProductDesc :title="item.name"  :description="item.subCategory" :productId="item.productId" :productData="item"/>
        </div> 
    </div>
    <Footer />
</div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
import LogInHeader from '../components/LogInHeader.vue';
import SlideShow from '../components/SlideShow.vue';
import MinimalProductDesc from '../components/MinimalProductDesc.vue';
import Footer from '../components/Footer.vue';

export default {
    name:'LandingPage',
    components:{
        LogInHeader,
        SlideShow,
        MinimalProductDesc,
        Footer
    },
    methods: {
      ...mapActions(['fetchProducts'])
    },
    data () {
        return {
           prodLIST: [],
          
           
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
        getProduct: 'getProducts',
        
       }) 
    },
    watch : {
      getProduct: function (newValue, oldValue) {
        this.prodLIST = newValue
        console.log('new value=====', this.prodLIST)
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

  .mainImage{
    padding: 30px;
    height:400px;
    width: 100%;
  }
</style>

