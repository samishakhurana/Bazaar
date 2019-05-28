<template>
    
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
    name:'ProductView',
    created(){
        console.log("in product view created")
        this.$store.dispatch('getProductsBySubCategory',this.$route.params.name);
    },
    computed:{
        ...mapGetters({
        getproductsFromCategories: 'getproductsFromCategories'
       })
    },
    watch:{
        getproductsFromCategories: function(newValue, oldValue){
        console.log("in watch");
        this.subCatProd = newValue;
        console.log('Product from Categories ', this.subCatProd)
      }
    }
}
</script>

<style>

</style>


