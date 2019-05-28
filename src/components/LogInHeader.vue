<template>
    <div class="navbarSpacing">

  <b-navbar toggleable="lg" type="dark" variant="primary" class="navbarSpacing">
    <b-navbar-brand href="http://localhost:9000/landingpage" class="spacingImg"><img :src="logoUrl" class="spacingImg"></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item class="spacingDropDown">
          <div>
            <b-dropdown id="dropdown-1" size="sm" text="Pick your choice" class="m-2" variant="btn btn-primary">
              <div v-for="item in subCategories" :key="item">
                <!-- <button type="button" class="btn btn-light" @click="navigateTo"><b>{{item}}</b></button> -->
              <b-dropdown-item @click="navigateTo">{{item}}</b-dropdown-item>
              </div>
            </b-dropdown>
          </div>
        </b-nav-item>
        <div class="spacingSearch">
          <input v-model="searchtext" v-on:keyup.enter="searchByName">
          <!-- <b-form-input size="sm" class="mr-sm-2" placeholder="Search your fav product" v-model="searchtext" ></b-form-input> -->
          <b-button size="sm" class="my-2 my-sm-0" variant="btn btn-primary" @click="searchByName"><b>Search</b></b-button>
        </div>
       <div v-if="validate">
        <b-nav-item >
          <b-button variant="btn btn-primary" class="spacingButton" @click="navigateToLoginSignup"><b>Login/Signup</b></b-button>
        </b-nav-item>
        </div>
        <div class="uName" v-else>
          <b-button size="sm" class="my-2 my-sm-0 name" variant="btn btn-primary" @click="profileView" ><h3>Hi {{userName}}!!!</h3></b-button>
          <b-button size="sm" class="my-2 my-sm-0 name" variant="btn btn-primary" @click="logout" ><h3>Logout</h3></b-button>
        </div>
        <router-link to="/mycart">
           <b-navbar-brand class="spacingImg"><img :src="cartLogo" class="spacingImg"></b-navbar-brand>
        </router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>


</div>

</template>

<script>
import cart_logo from '../assets/cart_logo.png'
import logo from "../assets/logo.png"
import {mapActions, mapGetters} from 'vuex';
import cartAPI from '../cartAPI/cartAPI.js'; 
export default {
  name: 'LogInHeader',
  data (){
     return {
       logoUrl: logo,
       searchtext: '',
       cartLogo: cart_logo,
       userName: '', 
       userpayload:{},
       subCategories:[],
       subCatProd:[],
      // loginStatus: 'false'
     }
  },
  methods: {
    searchByName (){
      console.log("searchtext is "+this.searchtext)
      this.$router.push({name: "search", query: {q: this.searchtext}});
    },
    navigateToLoginSignup(){
      this.$router.push({name:"loginsignup"});
    },
    
    navigateTo(e){
      console.log("in navigation", e.target.text);
      this.$store.dispatch('getProductsBySubCategory',e.target.text);
    },
    profileView(){
      this.$router.push({name:"profile"})
    },
    logout(){
      this.$store.dispatch('logoutuser');
      this.$router.push({name: "landingpage"});
    },
    
  },
  props: {
  },
  created(){
    this.$store.dispatch('fetchProfile');
    this.$store.dispatch('getAllSubCategories');
    if(sessionStorage.getItem('userDetails')){
        this.userName = JSON.parse(sessionStorage.getItem('userDetails')).payload.name
    }
  },
  computed : { 
       ...mapGetters({
        getUserInfos: 'getUserInfo',
        getCategories: 'getCategories',
        getproductsFromCategories: 'getproductsFromCategories',
        getLogoutResult: 'getLogoutResult',
       }),
       ...mapActions(['fetchProfile', 'logoutuser']),
       validate: function(){
        return !window.sessionStorage.getItem('userDetails')
      }, 
  },
  watch : { 
      getUserInfos: function (newValue, oldValue) {
        if(newValue.status == "success"){
            this.userpayload = newValue.payload;
        }
      },
      getCategories:function (newValue, oldValue) {
        this.subCategories = newValue
        console.log('Categories ', this.subCategories)
      },
      getproductsFromCategories: function(newValue, oldValue){
        console.log("in watch");
        this.subCatProd = newValue
        console.log('Product from Categories ', this.subCatProd)
      },
      getLogoutResult: function(newValue, oldValue){
        if(newValue.status == "success"){
          sessionStorage.removeItem('userDetails')
          console.log("successfully logged out")
          window.location.reload();
        }
      }
    }
}
</script>

<style>
  .navbarSpacing{
    padding-bottom: 0px;
  }
  .spacingImg{
    width: 50px;
    height: 100px;
    padding-top: 10px;
    padding-bottom: 0px;
    /* padding-left: 50px; */
  }
  .spacingDropDown{
    padding-left: 100px;
    padding-right: 100px;
  }

  .spacingSearch{
    padding-right: 100px;
  }
  .spacingButton{
    padding-right: 50px;
    padding-left: 50px;
    padding-top:30px;
  }
  .name{
    color: white;
    font-style: italic;
    padding-right: 200px;
    padding-top: 30px;
  }
  
  b-form-input{
    width: 500px;
  }
</style>

