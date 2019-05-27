<template>
<div @click="gotoproduct">
    
    <b-row class="product-row">
        <b-col cols="3">
            <b-img class="product-image" v-bind:src="this.imgsrc" alt="Responsive image"></b-img>
        </b-col>            
        <b-col class="desc-col">
            <h2>{{this.productdata.name}}</h2> 
            <h5>{{this.productdata.subCategory}}</h5>
            <p>Company: {{this.productdata.company}}</p>
            <p>Rating: {{this.productdata.rating}}</p>
            <p>Status: <span v-if="this.productdata.avilable">Available</span> <span v-else>Out of Stock</span></p>
        </b-col>
    </b-row>  

</div>     
</template>

<script>
export default {
    name:'SearchProductDesc',
    data(){
        return {
            imgsrc: ""
        }
    },
    props: {
     productdata : {
      type: Object,
      required: true,
     }
    },
    created(){
        this.imgsrc = this.productdata.imageUrl[1];
    },
    methods:{
        navigateTo(){
            this.$router.push({name:'productdetails'})
        },
        gotoproduct(){
            console.log(this.productdata);
            this.$router.push('/productdetails'+ '?id=' + this.productdata.id)
        }
    }
}
</script>

<style scoped>
img.product-image {
    height: 200px;
    width: 200px;
}
.desc-col {
    text-align: left;
}
.product-row {
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>


