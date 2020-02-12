<template>

<div class="container-fluid">
    <nav class="nav justify-content-end navbar navar-dark bg-dark">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <ul class="navbar navbar-dark bg-dark" >
  <li class="nav-item" >
    <a class="nav-link active" href="#">Products</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="book">Contact Us</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Login</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">call: 0800000000000</a>
  </li>
  <nav class="navbar navbar-dark bg-dark">
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
</ul>    
</nav>  
<div class="container" >
  <div class="row-center">
    
    <div class="col-sm-middle">
  <form>
  <div class="form-group">
    <label for="formGroupExampleInput">First Name</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="First Name ">
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Last Name</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Last Name">
  </div>
</form>
    </div>
    
  </div>
</div>
</div>
</template>

<script>
    export default{
        name: 'BookForm',
    }
</script>
<style>
.container{
    color: blue;
}
</style>
