<template>
<div>
    <h2>Just one more step and your favourite products are yours!!</h2>
    <div class="center-div">
        <label>Enter your email</label><br>
        <input type="text" name="email"/><br>
        <label>Enter your billing address</label><br>
        <textarea name="billingAddress" rows=3 cols=15></textarea><br>
        <label>Enter your shiping address</label><br>
        <textarea name="billingAddress" rows=3 cols=15></textarea><br>
        <label>Enter your pincode</label><br>
        <input type="textarea" name="pincode"/><br>
        <label>Total amount to be paid </label><br>
        <button class="btn btn-primary" type="submit">Pay now</button><br>
    </div>
</div>
</template>

<script>
export default {
    name:'PaymentPage'
}
</script>

<style>
    .center-div
{
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 50%;
  height: 70%;
  background-color: #ccc;
  border-radius: 3px;
}
</style>


