<template>
  <div>
    <div>
      <div class="container">
		<div class="card">
			<div class="container-fliud">
				<div class="wrapper row">
					<div class="preview col-md-6">
						
						<div class="preview-pic tab-content">
						  <div class="tab-pane active" id="pic-1"><img :src="product.imageUrl[1]" alt="Image" id="pImage"/></div>
						</div>	
					</div>
					<div class="col-md-6 merch">
						<h3 id="mText">Get your favourite product from your favourite Merchant</h3>
            <div class="table-responsive"  v-if="Array.isArray(merchantData)">
              <table class="table">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Rating</th>
                  <th scope="col">Price</th>
                  <th scope="col">Availability</th>
                  <th scope="col"></th>
                </tr>
                <!-- <div v-for="item in merchantData" :key="item"> --> 
                  <tr v-for="item1 in merchantData" :key="item1.mId">
                  <td scope="row" >{{item1.mname}}</td>
                  <td scope="row" >{{item1.mrating}}</td>
                  <td scope="row" >{{item1.price}}</td>
                  <td scope="row" >
                    <div v-if="item1.stock > 0">In Stock</div>
                    <div v-else>Out of Stock</div>
                  </td> 
                  <td >
                    <div class="checkbox">
                      <label><input type="checkbox" v-on:click="storeId(item1.mId,item1.price);count++;"/></label>
                    </div>
                  </td>
                </tr>
                
                
                <!-- </div> -->
              </table>
            </div>
					</div> 
          <div class="details">
            <h1 class="product-title"><b>{{product.name}}</b></h1>
            <h3 class="desc">A one of its kind product by {{product.company}}</h3>
            <div v-if="this.product && this.product.productAttribute">
            <div v-for="item in Object.keys(this.product.productAttribute)" :key="item">
                  <h4>{{item}}: <span>{{product.productAttribute[item]}}</span> </h4>            
            </div>
            
          </div>
            <div class="quantity">
      <button class="plus-btn" type="button" name="button" @click="addQuant">
        <img :src="plus_sign" alt="Add" class="logo"/>
      </button>
      <input type="text" name="quant" value="1" id="quant">
      <button class="minus-btn" type="button" name="button" @click="decQuant">
        <img :src="minus_sign" alt="Sub" class="logo"/>
      </button>
    </div>
            <b-button variant="primary" id="addToCart" @click="addDataToCart">Add To Cart</b-button>
            
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
import apiPath from '../productAPI/apiPaths';
import makeApiCall from '../productAPI/makeAPICall';

export default {
  name: 'ProductDetails',
  data(){
    return{
      plus_sign:plus,
      minus_sign:minus,
      product: [],
      result:"",
      merchantData:[],
      selectedMerchantId:0,
      selectedMerchantPrice:0,
      count:0,
      storeId:()=>{}
    }
  },
  methods:{
    storeId(id,price){
      if(count%2!=0&&this.selectedMerchantId==id){
        this.selectedMerchantId=0;
      }
      else{
        this.selectedMerchantId==id
        this.selectedMerchantPrice==price
      }
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
    console.log('&&&&', this.$route.query)
    console.log('productDetails', this.$store)
    /this.$store.dispatch('fetchSingleProduct', this.$route.params.id)
    //this.$store.dispatch('getMerchantDetails', this.$route.query)
    let self = this;
     makeApiCall.makeGetRequestwithParamMerch(apiPath.getMerchantList, (result)=>{self.merchantData = result.data;},this.$route.params.id)

  },
    computed : { 
       ...mapGetters({
        getProduct: 'getProduct',
        getResult:'getResult',
        getData:'getData',
       }) 
    },
    watch : {
      getProduct: function (newValue, oldValue) {
        console.log('new value', newValue)
        this.product = newValue
        console.log(this.product.imageUrl)
  
      },
      getResult:function(newValue,oldValue){
        console.log('new value', newValue)
        this.result = newValue
      },
      getData: function(newValue,oldValue){
        
        this.merchantData = newValue
        console.log("Merchant new value ",this.merchantData)
      },
      
    },
    methods: {
      addDataToCart(){
        var merchantObj;
        console.log("in add to cart");
        var temp={
          'productId':parseInt(this.product.productId),
          'quantity':parseInt(document.getElementById("quant").value),
          'merchantId':this.selectedMerchantId,
          'productname':this.product.name,
          'imgurl':this.product.imageUrl["1"],
          'price':this.selectedMerchantPrice
        }
        //console.log("=====")
        console.log(temp);
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
      },
      buyNow(){
        this.$router.push({name:'paymentpage'})
      }
  },
};
</script>

<style>
#mText{
  color: black;
}

.desc{
  color: black;
}

template{
  font-family: 'open sans';
  overflow-x: hidden; }

  .logo{
  max-width: 100%;
  max-height: 50%;
   }

   #pImage{
     padding-top: 50px;
     height: 500px;
     width: 450px
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

    .details{
      padding:50px;
    }

    .merch{
      padding: 50px;
    }

        
</style>

