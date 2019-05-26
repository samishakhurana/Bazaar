<template>
    <div>
        <b-button @click="navigateTo" variant="light">
        <b-card
            :title="title"
            :img-src="imageUrl || 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
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
         default:0
     }
    },
    methods:{
        navigateTo(){
            this.$router.push('/productdetails'+ '?id=' + this.productId)
        }
    }
}
</script>

<style>

</style>


