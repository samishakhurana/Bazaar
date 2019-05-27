<template>
    <div>
        <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width=100%
      img-height=30%
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

    <b-carousel-slide
        img-src="https://images.unsplash.com/photo-1544104210-0e4941d251a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
      ></b-carousel-slide>
      <b-carousel-slide
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>
      <b-carousel-slide
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>
      <b-carousel-slide
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

        </b-carousel>


    </div>
</template>

<script>
export default {
    name:'SlideShow',
    data () {
        return {
            slide: 0
        }
    },
    created () {
      console.log('created', this.slide)
    },
    methods: {
        onSlideStart () {
            console.log('onSlideStart')
        },
        onSlideEnd () {
            console.log('onSlideEnd')
        }
    }
}
</script>

<style>
  b-carousel-slide{
    height: 100px;
    width: 100%;
  }
</style>


