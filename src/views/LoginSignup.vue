<template>
<div class="formDesign">
    
    <b-container class="bv-example-row">
  <b-row>
      <b-col></b-col>
      <div class="login">
    <b-col>
        <b-button variant="outline-light" >LogIn</b-button>
        <br>
        <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Remember Me</label>
  </div>
  <button type="submit" class="btn btn-light">Submit</button>
</form>
    </b-col>
    </div>

    <div class="signup">
    <b-col>
        <b-button variant="outline-light" >SignUp</b-button>
        <br>
        <form>
    <div class="form-group">
    <label for="InputName">Name</label>
    <input type="text" class="form-control" id="InputName"  placeholder="Enter name">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Phone Number</label>
    <input class="form-control" id="InputPhoneNumber" placeholder="Enter phone number" type="number" pattern="^\d{4}-\d{3}-\d{4}$" required>
  </div>
  <div class="form-group">
    <label for="Username">Username</label>
    <input type="text" class="form-control" id="InputUserName"  placeholder="Enter username">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Terms and Conditions</label>
  </div>
  <button type="submit" class="btn btn-light">Submit</button>
</form>
    </b-col>
    </div>
    <b-col></b-col>
  </b-row>
</b-container>
</div>
    
</template>
<script>
export default {
    name:'LoginSignup'
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

