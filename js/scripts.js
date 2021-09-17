
//----------------------- Rodent Report -------------
var rodentReport = document.getElementById("rodentReport");
var rodentReport = new Chart(rodentReport, {
    type: 'bar',
    data: {
        labels: ['JAN','FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'SEP', 'OCT', 'NOV'],
        datasets: [{
            label: false,
            borderWidth: 0,
            backgroundColor: "#69A200",
            data: [47, 29, 68, 78, 97, 144,111, 164 , 104, 78],
        }]
    },
    options: {
        scales: {
            xAxes: [{
                barThickness: 20,
                gridLines: {
                    offsetGridLines: false,
                    display: false
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 25,
                    suggestedMin: 50,
                    suggestedMax: 100
                }
            }]
        },
        legend: {
            display: false,
        }

    }
});
//----------------------- Total Earning -------------
