import AvgBasketSizeByLocation from './AvgBasketSizeByLocation.json' assert {type: 'json'};

console.log(AvgBasketSizeByLocation);

const location = AvgBasketSizeByLocation.map(entry => entry.location);
const abs = AvgBasketSizeByLocation.map(entry => parseFloat(entry.ABS));

const ctx1 = document.getElementById('barchart');

const barchart = new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: location,
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
                  return value.toFixed(1);
              }
          }
      }
  }
}
});
