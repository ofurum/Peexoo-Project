<template>
    <div>
         <div class="calender">
             <div class="calender-header">
                <i class = "fa fa-fw fa-chevron-left" @click="subtractMonth"></i>
                <h4> {{month + '-'+ year }}</h4>
                <i class="fa fa-fw fa-cheveron-right" @click="addMonth">
             </div>
             <ul class="weekdays">
                 <li v-for = "day in days" :key= day></li>
             </ul>
         </div>
    </div>
</template>





<script>
import moment from 'moment.js'

export default {
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
            var b = this;
            return b.today.get('date');
        },
        initialMonth: function () {
            var b = this;
            return t.today.format('MMM');

        },
        initialYear: function () {
            var b = this;
            return b.today.format('Y');
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