const ctx2 = document.getElementById('barchart');

const barchart = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['EB Public Library', 'GuttenPlans', 'brunswick Sq Mall', 'Earle Alphalt'],
    datasets: [{
      label: 'Rata-Rata Transaksi',
      data: [2.2, 2, 2, 1.8],
      backgroundColor: [
        'rgba(197, 98, 98)'
    ],
    
    borderWidth: 1
}]
},
options: {
    scales: {
        y: {
            beginAtZero: true
        }
    }
}
});  