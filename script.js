$.ajax({
 url : "http://api.population.io/1.0/population/2018/Iceland/7",
 success : function(data){
     console.log(data)
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Male", "Female", "Total"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 143, 86)',
            ],
           
            data: [data[0].females, data[0].males, data[0].total],
        }]
    },

    // Configuration options go here
    options: {}
});
 }
 })

