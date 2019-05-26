<template>
    <div class="navbarSpacing">

  <b-navbar toggleable="lg" type="dark" variant="primary" class="navbarSpacing">
    <b-navbar-brand href="http://localhost:8081/landingpage" class="spacingImg"><img :src="logoUrl" class="spacingImg"></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item class="spacingDropDown">
          <div>
            <b-dropdown id="dropdown-1" size="sm" text="Pick your choice" class="m-2" variant="btn btn-primary">
              <b-dropdown-item >Phone</b-dropdown-item>
              <b-dropdown-item>Laptop</b-dropdown-item>
              <b-dropdown-item>Fashion</b-dropdown-item>
            </b-dropdown>
          </div>
        </b-nav-item>
        <b-nav-form class="spacingSearch">
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search your fav product" v-model="searchtext" ></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" variant="btn btn-primary" @click="searchByName"><b>Search</b></b-button>
        </b-nav-form>
        <div v-if="validate()">
        <b-nav-item >
          <b-button variant="btn btn-primary" class="spacingButton" @click="navigateToLoginSignup"><b>Login/Signup</b></b-button>
        </b-nav-item>
        </div>
        <div class="uName" v-else>
          <h3 class="name">Hi {{getUserName()}}</h3>
        </div>
            <b-navbar-brand href="http://localhost:8081/cart" class="spacingImg"><img :src="cartLogo" class="spacingImg"></b-navbar-brand>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>


</div>

</template>

<script>
import cart_logo from '../assets/cart_logo.png'
import logo from "../assets/logo.png"
export default {
  name: 'LogInHeader',
  data (){
     return {
       logoUrl: logo,
       searchtext: '',
       cartLogo: cart_logo,
       userName: ''
       //localStorageStatus:window.localStorage.length
     }
  },
  methods: {
    searchByName: function(){
      console.log("searchtext is "+this.searchtext)
      this.$router.push({name: "search", query: {q: this.searchtext}});
      window.location.reload();

    },
    navigateToPhone(){

    },
    navigateToLoginSignup(){
      this.$router.push({name:'loginsignup'})
    },
    getUserName () {
      /*if(localStorage.getItem('userDetails') !== null)
        return JSON.parse(localStorage.getItem('userDetails')).payload.uname
      else */
        return "guest"
    },
    validate(){
      if(window.localStorage.length==0){
        return true;
      }
      else{
        return false;
      }
    }
  },
  props: {
    searchtextprop: String
  },
  created(){
    this.searchtext = this.searchtextprop;
   /* if(localStorage.getItem("userDetails") !== null)
      this.userName = localStorage.getItem("userDetails")*/
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

