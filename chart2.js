import AvgBasketSizeByCategory from './AvgBasketSizeByCategory.json' assert {type: 'json'};

console.log(AvgBasketSizeByCategory);

const categories = AvgBasketSizeByCategory.map(entry => entry.Category);
const abs = AvgBasketSizeByCategory.map(entry => parseFloat(entry.ABS));

const ctx2 = document.getElementById('barchart2');

const barchart2 = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: categories,
    datasets: [{
      label: 'ABS',
      data: abs,
      backgroundColor: [
        'rgba(190, 0, 0, 0.5)',
      ],
      borderColor: [
        'rgba(190, 0, 0, 1)',
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
                  return value.toFixed(2);
              }
          }
      }
  }
}
});
