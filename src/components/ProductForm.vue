<template>
 <div class="container-fluid">
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Product Name</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Product Name">
  </div>
   <div class="form-group">
    <label for="exampleFormControlInput1">Product Price</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Product Price">
  </div>
   <div class="form-group">
    <label for="exampleFormControlInput1">Product Plan</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Product Plan">
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Product Status</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Vacant</option>
      <option>Booked</option>
    </select>
  </div>
  <div>
      <button type="button" class="btn btn-primary">Submit</button>
  </div>
</form>
</div>
</template>

<script>
    export default{
        name: 'ProductForm',
    }

</script>
<style src="./productform.css" scoped>

</style>
