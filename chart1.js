const ctx = document.getElementById('donat');

const donat = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['BSQ Mall x1364 - Zales', 'BSQ Mall x1366 - ATT'],
    datasets: [{
      label: '# of Votes',
      data: [926, 746],
      backgroundColor: [
        'rgba(200, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.8)'
    ],
    borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'
    ],
    borderWidth: 1
}]
},
options: {
    scales: {
            beginAtZero: true
    }
}
});  