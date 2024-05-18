var ctx4 = document.getElementById('chart4').getContext('2d');
var myChart = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['GuttenPlans', 'EB Public Library','Brunswick Sq Mall','Earle Asphalt',],
        datasets: [{
            label: 'Transaction Total (Cash)',
            data: [5210.5, 4139.75, 1845.75, 1220.5],
            backgroundColor: '(165, 42, 42, 1)', 
            borderColor: 'rgba(165, 42, 42, 1)', 
            borderWidth: 1
        }, {
            label: 'Transaction Total (Credit)',
            data: [2586, 3100.75, 1692.25, 716],
            backgroundColor: 'rgba(255, 192, 203, 0.5)', 
            borderColor: 'rgba(255, 192, 203, 1)', 
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
