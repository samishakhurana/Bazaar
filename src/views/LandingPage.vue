<template>
<div>
    <LogInHeader />
    <SlideShow />
    <div class="product-list">
        <MinimalProductDesc title="" imageUrl="" description=""/>
        <MinimalProductDesc />
        <MinimalProductDesc />
        <MinimalProductDesc />
        <MinimalProductDesc />
        <MinimalProductDesc />
        <MinimalProductDesc />
        <MinimalProductDesc />
    </div>
</div>
</template>
<script>
import LogInHeader from '/Users/samishakhurana/Desktop/ecommerce/web/src/components/LogInHeader.vue';
import SlideShow from '/Users/samishakhurana/Desktop/ecommerce/web/src/components/SlideShow.vue';
import MinimalProductDesc from '/Users/samishakhurana/Desktop/ecommerce/web/src/components/MinimalProductDesc.vue';
export default {
    name:'LandingPage',
    components:{
        LogInHeader,
        SlideShow,
        MinimalProductDesc
    },
    data () {
        return {
           prodLIST: []
        }
    },
    created () {
    //   this.$store.dispatch('getprodList')
    },
    mounted () {

    },
    computed : { 
        
    },
    watch : {
      prodList: function (newValue, oldValue) {
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

