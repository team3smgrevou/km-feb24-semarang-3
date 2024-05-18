var ctx5 = document.getElementById('chart6').getContext('2d');
var myChart = new Chart(ctx5, {
    type: 'bar',
    data: {
        labels: ['GuttenPlans', 'EB Public Library','Brunswick Sq Mall','Earle Asphalt',],
        datasets: [{
            label: 'Food',
            data: [2805,3729,1309,1534],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)', 
            borderWidth: 1
        }, {
            label: 'Carbonated',
            data: [3222,992,693,144],
            backgroundColor: 'rgba(255, 192, 203, 0.5)', 
            borderColor: 'rgba(255, 192, 203, 1)', 
            borderWidth: 1
        }, {
            label: 'Non Carbonated',
            data: [878,1115,601,88],
            backgroundColor: 'rgba(255, 192, 203, 0.5)', 
            borderColor: 'rgba(255, 192, 203, 1)', 
            borderWidth: 1
        }, {
            label: 'Water',
            data: [0,551,667,43],
            backgroundColor: 'rgba(255, 192, 203, 0.5)', 
            borderColor: 'rgba(255, 192, 203, 1)', 
            borderWidth: 1
        }
    ]
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
