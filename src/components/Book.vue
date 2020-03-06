<template>
    <div class="container-fluid">
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <form autocomplete="off" v-on:submit="addProduct" method="POST">
  <div class="form-group">
    <label for="exampleFormControlInput1">Product Name</label>
    <input v-model="productName" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Product Name">
  </div>
   <div class="form-group">
    <label for="exampleFormControlInput1">Product Price</label>
    <input v-model="productPrice" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Product Price">
  </div>
   <div class="form-group">
    <label for="exampleFormControlInput1">Product Plan</label>
    <input v-model="productPlan" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Product Plan">
  </div>
  </form>
    </div>
</template>