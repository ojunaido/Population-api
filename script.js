function getPopulation(){
    let age = document.querySelector(".age").value;
    let year = document.querySelector(".year").value;
    let country = document.querySelector(".country").value;        
$.ajax({
 url : `http://api.population.io/1.0/population/${year}/${country}/${age}`,
 success : function(data){
     console.log(data)
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Male", "Female"],
        datasets: [{
            label: "Male and Females",
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 143, 86)',
            ],
           
            data: [data[0].females, data[0].males],
        }]
    },

    // Configuration options go here
    options: {}
});
var ctx = document.getElementById('Chart').getContext('2d');
var chart = new Chart(ctx, {
type: 'bar',
data: {
    labels: ["Male", "Female", "Total"],
    datasets: [{
        label: "Total Population",
        backgroundColor: [
            'rgba(54, 162, 235)',
            'rgba(255, 99, 132)',
            'rgba(255, 143, 86)',
        ],
       
        data: [data[0].females,data[0].males , data[0].total],
    }]
},

// Configuration options go here
options: {}
});
 }
 })


}
















 ( function( window ) {

    'use strict';
    
    // class helper functions from bonzo https://github.com/ded/bonzo
    
    function classReg( className ) {
      return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }
    
    // classList support for class management
    // altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;
    
    if ( 'classList' in document.documentElement ) {
      hasClass = function( elem, c ) {
        return elem.classList.contains( c );
      };
      addClass = function( elem, c ) {
        elem.classList.add( c );
      };
      removeClass = function( elem, c ) {
        elem.classList.remove( c );
      };
    }
    else {
      hasClass = function( elem, c ) {
        return classReg( c ).test( elem.className );
      };
      addClass = function( elem, c ) {
        if ( !hasClass( elem, c ) ) {
          elem.className = elem.className + ' ' + c;
        }
      };
      removeClass = function( elem, c ) {
        elem.className = elem.className.replace( classReg( c ), ' ' );
      };
    }
    
    function toggleClass( elem, c ) {
      var fn = hasClass( elem, c ) ? removeClass : addClass;
      fn( elem, c );
    }
    
    var classie = {
      // full names
      hasClass: hasClass,
      addClass: addClass,
      removeClass: removeClass,
      toggleClass: toggleClass,
      // short names
      has: hasClass,
      add: addClass,
      remove: removeClass,
      toggle: toggleClass
    };
    
    // transport
    if ( typeof define === 'function' && define.amd ) {
      // AMD
      define( classie );
    } else {
      // browser global
      window.classie = classie;
    }
    
    })( window );
    

