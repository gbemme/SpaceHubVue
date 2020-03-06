<template>

<div class="gbemi row">
    <!-- <nav class="nav justify-content-end navbar navar-dark bg-dark">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <ul class="navbar navbar-dark bg-dark" >
    
  <li class="nav-item" >
    <a class="nav-link active" href="/">Home</a>
  </li>
  <li class="nav-item" >
    <a class="nav-link active" href="/portfolio">Products</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="book">Contact Us</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/login">Login</a>
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
</nav>  -->
<!-- <div class="row">
    <ul class="nav nav-tabs">
        <li class="nav-item">Gbemi</li>
        <li class="nav-item">Tobi</li>
        <li class="nav-item">Tola</li>
    </ul> -->


<!--Logo-->
  <!-- <div>
    <div class="row">
    <div class="col">
        <a href="index.html"><img src="assets/img/shopstack-logo.png" width="150px" /></a>
    </div>

    <div class="col"></div>

    <div class="col"></div>
    
    </div>
    </div> -->

<!--Logo ends-->
        

        <!--contact form-->
        <div class="container">
         <div class="contact-clean">


        <form method="post" action="" id="register-form">



            <div class="row">
                <div class="col-md-4">
                    <p style=" border-bottom: 3px solid #00D09E;"><a href="/register" style="text-decoration: none;">SignUp</a></p>
                </div>
                 <!-- <div class="col-md-3"></div> -->
                 <div class="col-md-4">
                   <p><a href="/" style="text-decoration: none;">Home</a></p>
                 </div>
                 <div class="col-md-4">
                    <p><a href="/login" style="text-decoration: none;">Sign In</a></p>
                </div>
                </div>


            <hr />
            <h2 class="text-center" id="header">Create Account</h2><br />
            
            <div class="form-row">
                <div class="col">
                </div>
            </div><br />
            <div class="form-row">
            <div class="col">
            <div class="form-group"><input class="form-control" type="text" name="firstname" placeholder="Firstname" id="firstname"></div>
            </div>
            <div class="col">
            <div class="form-group"><input class="form-control" type="text" name="lastname" placeholder="Lastname" id="lastname"></div>
            </div>
            </div><br /><br />

            <div class="form-row">
            <div class="col">
            <div class="form-group"><input class="form-control" type="email" name="email" placeholder="Phone" id="email"></div>
            </div>
            <div class="col">
            <div class="form-group"><input class="form-control" type="number" name="phone" placeholder="Phone Number" id="phone"></div>
            </div>
            </div><br /><br />

            <div class="form-row">
            <div class="col">
            <div class="form-group"><input class="form-control" type="password" name="password" placeholder="password" id="password"></div>
            </div>
            <div class="col">
            <div class="form-group"><input class="form-control" type="password" name="confirm_password" 
            placeholder="Repeat Password" id="confirm_password"></div>
            </div>
            </div><br /><br />

            <div class="form-group">
            <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" >
            <label class="form-check-label" for="gridCheck"><a href="terms-of-use.html" id="alt">
                Agree to Terms and Conditions</a>
            </label>
            </div>
        </div>

            <div class="form-group"><button class="btn btn-primary border rounded" type="submit"><strong>Register </strong></button></div>
        </form>
    </div>
    </div>
</div>

</template>

<script>
    export default{
        name: 'Register',
    }
</script>
<style src="./login.css" scoped>

</style>
