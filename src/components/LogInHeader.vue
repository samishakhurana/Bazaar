<template>
    <div>

  <b-navbar toggleable="lg" type="dark" variant="primary" class="navbarSpacing">
    <b-navbar-brand href="#" class="spacingImg"><img :src="logoUrl" class="spacingImg"></b-navbar-brand>

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
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search" ></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit" variant="btn btn-primary"><b>Search</b></b-button>
        </b-nav-form>
        <b-nav-item >
          <b-button variant="btn btn-primary" class="spacingButton" @click="navigateToLoginSignup"><b>Login/Signup</b></b-button>
        </b-nav-item>
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
       logoUrl: logo 
     }
  },
  methods:{
    navigateToPhone(){

    },
    navigateToLoginSignup(){
      this.$router.push({name:'loginsignup'})
    }
  }
}
</script>

<style>
  .navbarSpacing{
    padding: 100px;
  }
  .spacingImg{
    width: 50px;
    height: 80px;
  }
  .spacingDropDown{
    padding-right: 15px;
  }

  .spacingSearch{
    padding-right: 15px;
  }
  .spacingButton{
    padding-right: 50px;
    padding-left: 50px
  }

  b-form-input{
    width: 500px;
  }
</style>

