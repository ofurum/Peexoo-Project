<template>
<div>
 <div class="container-fluid bg-white sticky-top text-dark shadow p-3 bg-white " >
      <Header />
 </div> 
 <router-view /> 
 <div id="app">
    <font-awesome-icon icon="user-secret" />
  </div>
 <Footer />
 </div>
</template>

<style>

</style>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  // name: 'App',
  components:{
    Header,
    Footer,
    
    
  }
}
</script>
