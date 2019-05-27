<template>
    <div>
        <b-button @click="navigateTo" variant="light">
        <b-card
            :title="title"
            v-bind:img-src="this.imgsrc"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 imgSize"
        >
        <b-card-text>
            {{description}}
        </b-card-text>
        </b-card>
        </b-button>
    </div>
</template>

<script>
export default {
    name:'MinimalProductDesc',
    data(){
        return{
            imgsrc:""
        }
    },
    props: {
     title : {
      type: String,
      default: ""
     },
     imageUrl : {
      type: String,
      default: ""
     },
     description : {
      type: String,
      default: ""
     },
     productId:{
         type: String,
         default:""
     },
     productData:{
         type: Object,
         required:true
     }
    },
    methods:{
        navigateTo(){
            this.$router.push('/productdetails/' + this.productId)
        }
    },
    created(){
        //if(productData!=null){
        this.imgsrc=this.productData.imageUrl[1]
        //}
    }
}
</script>

<style>
.imgSize{
    height: 400px;
    width: 400px;
}

</style>


