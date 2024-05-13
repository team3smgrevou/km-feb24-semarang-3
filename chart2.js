const ctx2 = document.getElementById('barchart');

const barchart = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['EB Public Library', 'GuttenPlans', 'Brunswick Sq Mall', 'Earle Asphalt'],
    datasets: [{
      label: 'Rata-Rata Transaksi',
      data: [2.2, 2, 2, 1.8],
      backgroundColor: [
          'rgba(165, 42, 42, 1)',
          
      ],
      borderColor: [
          'rgba(165, 42, 42, 1)',
      ],
      borderWidth: 1
  }]
},
options: {
  scales: {
      y: {
          beginAtZero: true,
          ticks: {
              stepSize: 1,
              callback: function (value) {
                  return value + ' ';
              }
          }
      }
  }
}
});