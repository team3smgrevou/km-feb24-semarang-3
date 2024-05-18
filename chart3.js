const ctx3 = document.getElementById('barchart2');

const barchart2 = new Chart(ctx3, {
  type: 'bar',
  data: {
    labels: ['Non Carbonated', 'Carbonated', 'Food', 'Water'],
    datasets: [{
      label: 'Rata-Rata Transaksi',
      data: [2.9, 2.2, 2, 2,],
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