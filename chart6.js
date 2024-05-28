import salesInBsqMall from './salesInBsqMall.json' assert {type: 'json'};

console.log(salesInBsqMall);

const labels = salesInBsqMall.map(entry => 'BSQ Mall x1364 - Zales - BSQ Mall x1366 - ATT');
const data = salesInBsqMall.map(entry => parseInt(entry.total_sales));

const ctx = document.getElementById('chart6').getContext('2d');
const chart6 = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: labels,
    datasets: [{
      data: data,
      backgroundColor: [
        'rgba(255, 40, 0, 0.5)', 
        'rgba(248, 131, 121, 0.5)',  
      ],
      borderColor: [
        'rgba(255, 40, 0, 1)', 
        'rgba(248, 131, 121, 1)',
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
