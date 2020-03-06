<template>

<div class="gbemi">
    <ul class="nav nav-tabs">
        <li class="nav-item"></li>
        <li class="nav-item"></li>
        <li class="nav-item"></li>
    </ul>

    <div class="container-fluid">
    <div class="row">
    <div class="col">
       <router-link class="navbar-brand js-scroll-trigger" to="/">SpaceHub</router-link>
    </div>

    <div class="col"></div>

    <div class="col"></div>
    
    </div>
    </div>
        

        <!--contact form-->
        <div class="container">
         <div class="contact-clean">
        <form method="post">


            <div class="row">
                <div class="col-md-4">
                    <p style=" border-bottom: 3px solid #00D09E;"><a href="/register" style="text-decoration: none;">Sign Up</a></p>
                </div>
                 <div class="col-md-4">
                    <p><a href="/" style="text-decoration: none;">Home</a></p>
                 </div>
               
                 <div class="col-md-4">
                    <p><a href="/portfolio" style="text-decoration: none;">View Space</a></p>
                </div>
            </div>


            <hr />
            <div>
            <h2 class="text-center" id="header">Login</h2><br />
            </div> 
            

            
            <div class="form-group"><input class="form-control" type="text" name="username" placeholder="Email/Phone"></div>
            <br>
            <br>
            <div class="form-group"><input class="form-control" type="password" name="password" placeholder="password"></div>
            
            <br /><br />

            <div class="row">

            <div style="background-color: #394959; width:520px; height:40px; padding-top:05px; color: white;" class="form-group"><submit value="submit"><strong>Login </strong></submit></div>
            </div>
        </form>
    </div>
    </div>
        
   
    
</div>

</template>

<script>
    export default{
        name: 'Login',
    }
</script>
<style src="./login.css" scoped>

</style>
