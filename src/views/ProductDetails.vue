<template>
  <div>
    <LogInHeader/>
    <div>
      _<div class="container">
		<div class="card">
			<div class="container-fliud">
				<div class="wrapper row">
					<div class="preview col-md-6">
						
						<div class="preview-pic tab-content">
						  <div class="tab-pane active" id="pic-1"><img :src="product.imageUrl" alt="Image"/></div>
						</div>	
					</div>
					<div class="details col-md-6">
						<h1 class="product-title"><b>{{product.name}}</b></h1>
            <h3 class="desc">A one of its kind product by {{product.company}}</h3>
						<div class="rating">
							<span class="review-no">41 reviews</span>
						</div>
						<h4 class="price">Price: <span>Rs.1800</span></h4>
            <div v-if="this.product && this.product.productAttribute">
            <div v-for="item in Object.keys(this.product.productAttribute)" :key="item">
                  <h4>{{item}}: <span>{{product.productAttribute[item]}}</span> </h4>            
            </div>
            </div>
            <div class="quantity">
      <button class="plus-btn" type="button" name="button" @click="addQuant">
        <img :src="plus_sign" alt="Add" />
      </button>
      <input type="text" name="quant" value="1" id="quant">
      <button class="minus-btn" type="button" name="button" @click="decQuant">
        <img :src="minus_sign" alt="Sub" />
      </button>
    </div>
            <b-button variant="primary" id="addToCart" @click="addDataToCart">Add To Cart</b-button>
            <b-button variant="primary">Buy Now</b-button>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import minus from '../assets/minus.png';
import plus from '../assets/plus.png';
import LogInHeader from "../components/LogInHeader.vue";
import Footer from "../components/Footer.vue";
import {mapActions, mapGetters} from 'vuex';

export default {
  name: "ProductDetails",
  data(){
    return{
      plus_sign:plus,
      minus_sign:minus,
      product: {},
      result:""
    }
  },
  components: {
    LogInHeader,
    Footer
  },
  props:{
    imageURL:{
      type:String,
      default : "https://upload.wikimedia.org/wikipedia/en/d/d1/Image_not_available.png"
    } 
  },
  created(){
    console.log(this.$route.query)
    console.log('productDetails', this.$store)
    this.$store.dispatch('fetchSingleProduct', this.$route.query)
  },
  mounted () {

  },
    computed : { 
       ...mapGetters({
        getProduct: 'getProduct',
        addToCart:'addToCart'
       }) 
    },
    watch : {
      getProduct: function (newValue, oldValue) {
        console.log('new value', newValue)
        this.product = newValue
        console.log(this.product.name)
      },
      addToCart:function(newValue,oldValue){
        console.log('new value', newValue)
        this.result = newValue
      }
    },
    methods: {
      addDataToCart(){
        console.log("here");
        var temp={
          'productId':parseInt(this.product.productId),
          'quantity':parseInt(document.getElementById("quant").value),
          'merchantId':12,
          'userId':11
        }
          this.$store.dispatch('addToCart', temp);
      },
      // ...mapActions(['getSingleProduct']),
      addQuant(){
        var num=document.getElementById("quant").value;
        num=parseInt(num);
        num=num+1;
        document.getElementById("quant").value=num;
      },
      decQuant(){
        var num=document.getElementById("quant").value;
        num=parseInt(num);
        if(num!=1){
          num=num-1;
        }
        
        document.getElementById("quant").value=num;
      }
  },
};
</script>

<style>
.desc{
  color: black;
}

template{
  font-family: 'open sans';
  overflow-x: hidden; }

  img {
  max-width: 100%;
  max-height: 60%;
   }

   .preview {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column; }
  @media screen and (max-width: 996px) {
    .preview {
      margin-bottom: 20px; } }

.preview-pic {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1; }

.preview-thumbnail.nav-tabs {
  border: none;
  margin-top: 15px; }
  .preview-thumbnail.nav-tabs li {
    width: 18%;
    margin-right: 2.5%; }
    .preview-thumbnail.nav-tabs li img {
      max-width: 100%;
      display: block; }
    .preview-thumbnail.nav-tabs li a {
      padding: 0;
      margin: 0; }
    .preview-thumbnail.nav-tabs li:last-of-type {
      margin-right: 0; }

.tab-content {
  overflow: hidden; }
  .tab-content img {
    width: 100%;
    -webkit-animation-name: opacity;
            animation-name: opacity;
    -webkit-animation-duration: .3s;
            animation-duration: .3s; 
        }

    #addToCart{
        margin: 20px;
    }

    .minus-btn{
      height: 50px;
      width: 50px;
      border-radius: 50%;
    }

    .plus-btn{
      height: 50px;
      width: 50px;
      border-radius: 30%;
    }


        
</style>

