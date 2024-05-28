import typeByLocation from './typeByLocation.json' assert {type : 'json'}

console.log(typeByLocation)

const locations = typeByLocation.map(entry => entry.location);
const totalCash = typeByLocation.map(entry => parseFloat(entry.total_cash));
const totalCredit = typeByLocation.map(entry => parseFloat(entry.total_credit));

var ctx3 = document.getElementById('chart3').getContext('2d');
var myChart = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: locations,
        datasets: [{
            label: 'Transaction Total (Cash)',
            data: totalCash,
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            borderColor: 'rgba(255, 0, 0, 1)',  
            borderWidth: 1
        }, {
            label: 'Transaction Total (Credit)',
            data: totalCredit,
            backgroundColor: 'rgba(248, 131, 121, 0.5)', 
            borderColor: 'rgba(248, 131, 121, 1)',  
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1000,
                    callback: function (value) {
                        return value;
                    }
                }
            }
        }
    }
});
