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
    <button class="btn2 btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
</ul>    
</nav> 
<div class="container">
    <!-- form holder -->
    <div class="formholder">
      <!-- title holder -->
<div class="titleHolder">
  <i class="far fa-user-circle"></i>
  <h1>Sign in</h1>
  <p>Login Using Your Username and Password.</p>
</div>
<form:form action="${pageContext.request.contextPath}/authenticateTheUser" method="POST" class="loginForm">

  <div class="row">
     <p>
      User name: <input type="text" name="username" placeholder="Username" required />
       <i class="fas fa-user"></i>
      </p>
     </div> 
         
 <div class="row">
        <p>
          Password: <input type="password" name="password" placeholder="Password" required />
          <i class="fas fa-key"></i>
          </p>
  </div>
<div class="row">
  <label for="rememberme"><input type="checkbox" id="rememberMe"></label>
  
</div>
<div class="row">
     <button type="submit" class="btn1">Login</button>
</div>
<div class="row">
          <a href="forgot-password.html">Forgot Password?</a>
          <br>
          <a href="register.html">Not registered? Click to register</a>
        </div>
</form:form>
    </div>      
</div>

</div>
</template>

<script>
    export default{
        name: 'BookForm',
    }
</script>
<style src="./bookform.css" scoped>
.container {
    color: blue;
}
</style>
