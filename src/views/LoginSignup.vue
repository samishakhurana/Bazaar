<template>
<div class="formDesign">
    
    <b-container class="bv-example-row">
  <b-row>
      <b-col></b-col>
      <div class="login">
    <b-col>
        <b-button variant="outline-light" >LogIn</b-button>
        <br>
        
  <div>
    <label for="username">Username</label>
    <input type="text" class="form-control" id="username"  placeholder="Enter username" required>
  </div>
  <div>
    <label for="pswd">Password</label>
    <input type="password" class="form-control" id="pswd" placeholder="Enter Password" required>
  </div>
  
  <button type="submit" class="btn btn-light" @click="checkSigninData() /*login()*/">Submit</button>
    </b-col>
    </div>

    <div class="signup">
    <b-col>
        <b-button variant="outline-light" >SignUp</b-button>
        <br>
        <!-- <form> -->
    <div >
    <label for="InputName">Name</label>
    <input type="text" class="form-control" id="InputName"  placeholder="Enter name" required>
  </div>
  <div >
    <label for="InputEmail">Email address</label>
    <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email" required>
  </div>
  <div >
    <label for="PhoneNumber">Phone Number</label>
    <input class="form-control" id="PhoneNumber" placeholder="Enter phone number" type="number" pattern="^\d{4}-\d{3}-\d{4}$" required>
  </div>
  <div >
    <label for="InputUsername">Username</label>
    <input type="text" class="form-control" id="InputUsername"  placeholder="Enter username" required>
  </div>
  <div >
    <label for="InputPassword">Password</label>
    <input type="password" class="form-control" id="InputPassword" placeholder="Password" required>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Terms and Conditions</label>
  </div>
  <button type="submit" class="btn btn-light" @click="checkSignupData() /*signup()*/">Submit</button>
<!-- </form> -->
    </b-col>
    </div>
    <b-col></b-col>
  </b-row>
</b-container>
</div>
    
</template>
<script>

import {mapActions, mapGetters} from 'vuex';
export default {
    name:'LoginSignup',
    data(){
      return{
        result:{},
        userStatus:{}
      }
    },
     computed : { 
       ...mapGetters({
        getFinalResult: 'getFinalResult',
        getStatus: 'getStatus'
       }) 
    },
    watch:{
      getFinalResult: function (newValue, oldValue) {
        console.log('new value', newValue)
        this.result = newValue
        console.log(this.result.status+" --- sign in status")
        console.log(""+this.result)

        if(this.result.status==="success"){
          sessionStorage.setItem('userDetails', JSON.stringify(this.result));
          sessionStorage.setItem('userAccessToken', this.result.accesstoken);
          this.$router.push('/landingpage')
          window.location.reload();
        }
        else{
          console.log("fail");
        }
      },
      getStatus: function(newValue,oldValue){
        this.userStatus=newValue
        //console.log(newValue+" ")
        console.log(this.userStatus.status+" --- sign up status")
        //console.log(""+this.userStatus)

        if(this.userStatus.status==="success"){
          console.log("sign up is here ",this.userStatus);
          sessionStorage.setItem('userDetails', JSON.stringify(this.userStatus));
          sessionStorage.setItem('userAccessToken', this.result.accesstoken)
          this.$router.push('/landingpage')
          window.location.reload();
        }
        else{
          console.log("fail");
        }
      }

    },
    methods:{
      login(){
        console.log("in login");
        var temp={
          'uname':document.getElementById("username").value,
          'password':document.getElementById("pswd").value
        }
        this.$store.dispatch('checkLogin',temp);
        
        console.log("log in result "+this.result.status )
      },
      signup(){
        //this.$router.push({name:'landingpage'})
        console.log("in signup");
        var temp={
          //'number':this.getElementById("PhoneNumber"),
          'uname':document.getElementById("InputUsername").value,
          'password':document.getElementById("InputPassword").value,
          'email':document.getElementById("InputEmail").value,
          'name':document.getElementById("InputName").value
        }
        console.log(temp.uname+temp.password);
        this.$store.dispatch('addUser',temp);
        //console.log("sign up result "+this.userStatus.result)
      },
      checkSigninData(){
        var uname=document.getElementById("username").value;
        var pswd=document.getElementById("pswd").value;
        if(uname.length!=0&&pswd.length!=0){
          this.login();
        }
        else{
          alert("Invalid");
        }
      },
      checkSignupData(){
        var name=document.getElementById("InputName").value;
        var email=document.getElementById("InputEmail").value;
        var password=document.getElementById("InputPassword").value;
        var username=document.getElementById("InputUsername").value;
        var number=document.getElementById("PhoneNumber").value;

        console.log(number.length+" length of number ");

        if(name.length!=0&&email.length!=0&&password.length!=0&&username.length!=0&&number.length!=10){
          this.signup();
        }
        else{
          alert("Invalid")
        }
      }
    }
}
</script>

<style>
.login{
    padding-top: 50px;
    padding-bottom: 10px;
    border-right: 1px dashed #333;
}
.signup{
    padding-top: 50px;
    padding-bottom: 10px;
}
.formDesign{
    padding-top: 80px;
    padding-bottom: 15px;
    background-image: url(https://png.pngtree.com/thumb_back/fh260/back_pic/00/02/40/1556176df28a3cf.jpg);
    background-size: 100% 100%;
}

@media only screen and (max-width: 500px) {
  .login{
    border-bottom: 1px dashed #333;
    border-right: 0px;
  }
}


</style>

