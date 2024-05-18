const ctx = document.getElementById('donat');

const donat = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['BSQ Mall x1364 - Zales', 'BSQ Mall x1366 - ATT'],
    datasets: [{
      data: [926, 746],
      label: 'd',
      data: [55.4, 44.6],
      backgroundColor: [
          'rgb(255, 0, 0)',
          'rgb(255, 99, 125)',
      ],
      borderColor: [
          'rgb(255, 0, 0)',
          'rgb(255, 99, 125)',
      ],
      borderWidth: 1
  }]
},
options: {
  plugins: {
      tooltip: {
          callbacks: {
              label: function (context) {
                  let label = context.parsed + '%';
                  return label;
              }
          }
      }
  }
}
});