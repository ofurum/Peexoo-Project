<template>
<div>
<div>
  <div class="container" >
  <b-navbar toggleable="lg" type="dark" variant="white" class="text-dark">
    <b-navbar-brand href="#">
      <div>
        <img src="../assets/logoo.png" class="profile">
      </div>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" class="bg-warning"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav> -->

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form> -->
        <b-nav-item to="/" variant="warning"><a>I am a photographer</a></b-nav-item>
        <b-nav-item to="/"><a>Explore photos</a></b-nav-item>
        <b-nav-item to="/"><a>Find a photographer</a></b-nav-item>
        <b-nav-item to="/"><a>Find my photos</a></b-nav-item>
        <b-nav-item to="/"><a>Log in or register</a></b-nav-item>
      

        
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</div>

</div>

</template>
<style >
.profile{
       background-size: cover;
       height: 10vh;

}
.navbar-dark .navbar-nav .nav-link  {
  color: black!important
}
.navbar-dark .navbar-nav .nav-link a:hover{
  color: orange!important
}

       
</style>
