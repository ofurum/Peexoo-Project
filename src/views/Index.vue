<template>
<div>
   <div>
  <div class="img">

  </div>
  </div>
  <div class="container-fluid bg-warning">
  <div class="container ">
  <div class="row">
  <b-navbar toggleable="lg" type="dark" variant="warning" class="text-warning">
  <div class="col">
    <b-navbar-brand href="#">
  
              <div>
                  <img src= "../assets/display.jpg" class="profile">
              </div>
    
    </b-navbar-brand>
    </div>
      
    
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto static">
        <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form> -->
        <b-nav-item to="/" cl>Details</b-nav-item>
        <b-nav-item to="/">Portfolio</b-nav-item>
        <b-nav-item to="/">Availability</b-nav-item>
        <b-nav-item to="/">Pricing Packages</b-nav-item>
        <b-nav-item to="/">i am a photographer</b-nav-item>
        <b-nav-item to="/">Reviews</b-nav-item>

        
      </b-navbar-nav>
  </b-navbar>
  </div>
  </div>


  </div>
       <div class="calendar">
        <div class="calendar-header">
            <i class="fa fa-fw fa-chevron-left" @click="subtractMonth"></i>
            <h4>{{month + ' - ' + year}}</h4>
            <i class="fa fa-fw fa-chevron-right" @click="addMonth"></i>
        </div>
        <!-- <ul class="weekdays">
            <li v-for="(day,t)in days" :key="t"></li>
        </ul> -->
        <ul class="dates">
            <li v-for="(blank,t) in firstDayOfMonth" :key="t">&nbsp;</li>
            <li v-for="(date,t) in daysInMonth" :key="t" 
        		:class="{'current-day': date == initialDate &amp;&amp; month == initialMonth && year == initialYear}">;
                <span></span>
           </li>
        </ul>
    </div>

   <div>
       <b-container>
       <div class="p-5">    
      <div class="row text-center">
          <!-- First column -->
          <div class="col">
            <h4>Quick Links</h4>  
            <div class="list">
                <li><span>Find a Photographer</span></li>
                <li><span>Find my pictures</span></li>
                <li><span>Peexoomemories</span></li>
                <li><span>Become a photographer</span></li>
            </div>

          </div>
          <!-- Second column -->
          <div class="col">
              <h4>Company</h4>
          <div class="list"> 
              <li><span>About us</span></li>
             <li> <span>FAQ</span></li>
              <li><span>Pricing</span></li>
              <li><span>careers</span></li>
              <li><span>Help &amp; support</span></li>
              <li><span>Terms of Service</span></li>
              <li><span>Private Policy</span></li>
          </div>

          </div>
          <!-- Third column -->
          <div class="col">
              <h4>Connect With us</h4>
               <div class="list">
                   <p class="para"><span>5A, Awudu Egheda,<br>
                       Lekki, Lagos.<br>
                       +234 8003229932
                       <div>
                       <a href="">customer.service@peexoo.ai</a>
                       </div>
                   </span></p>
               </div>

          </div>


      </div>
       </div>
       </b-container>


   </div>   
  
</div>  

</template>

<style  scoped>
   .img{
     padding-top: 40vh;
     padding-bottom: 40vh;
     background-image: url("https://images.unsplash.com/photo-1573894158867-3b048fcb012d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80");
     background-size: cover;
     background-repeat: no-repeat;
     overflow: hidden;
   }
   .profile{
       background-size: contain;
       width: 30%;
       height: 30px;
       z-index: -1;
       position: relative
       
   }
   .list{
     list-style: none;
   }
   .static{
     display: flex;
     flex-direction: row;
     position: relative;

   }
   
   
</style>



<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import moment from 'moment'

export default {
  name: 'home',
  components: {
    Header
  },
  data(){
        return{
            today: moment(),
            dateContext: moment(),
            days: ['S', 'M','T', 'W', 'T', 'F', 'S']
        }
    },
    computed: {
        year: function() {
            var t= this;
            return t.dateContext.format('Y');


        },
        month: function () {
            var t = this;
            return t.dateContext.format('MMMM');


        },
        daysInMonth: function () {
              var t = this;
              return t.dateContext.daysInMonth();
        },
        currentDate: function () {
              var t = this;
              return t.dateContext.get('date')
        },
        firstDayOfTheMonth: function () {
              var t = this;
              var firstDay = moment(t.dateContext).subtract((t.currentDate-1), 'days');
              return firstDay.weekday();
        },
        initialDate: function () {
            var t = this;
            return t.today.get('date');
        },
        initialMonth: function () {
            var t = this;
            return t.today.format('MMM');

        },
        initialYear: function () {
            var t = this;
            return t.today.format('Y');
        }
    },

    methods: {
        addMonth: function () {
            var c = this;
            c.dateContext = moment(c.dateContext).add(1, 'month');
        },
        subtractMonth: function () {
            var c = this;
            c.dateContext = moment(c.dateContext).subtract(1, 'month')
        }
    }
    
}

</script>
