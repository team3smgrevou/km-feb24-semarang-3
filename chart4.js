import salesByMonth from './salesByMonth.json' assert {type: 'json'};

console.log(salesByMonth);

// Extract data from JSON
const xValuesLine = salesByMonth.map(entry => entry.periode);
const yValuesLine = salesByMonth.map(entry => parseInt(entry.total_sales)); // Convert to integers if necessary

// Create line chart
var ctx4 = document.getElementById('chart4').getContext('2d');
var myLineChart = new Chart(ctx4, {
    type: 'line',
    data: {
        labels: xValuesLine,
        datasets: [{
            label: 'Total Sales',
            fill: false,
            lineTension: 0,
            backgroundColor: 'rgba(190, 0, 0, 0.5)',
            borderColor: 'rgba(190, 0, 0, 1)',
            data: yValuesLine
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
