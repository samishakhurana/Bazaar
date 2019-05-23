<template>
    <div>
        <b-button @click="navigateTo" variant="light">
        <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
        <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
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
    },
    methods:{
        navigateTo(){
            this.$router.push({name:'productdetails'})
        }
    }
}
</script>

<style>

</style>


