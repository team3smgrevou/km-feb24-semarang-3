var xValuesLine = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
var yValuesLine = [884, 909, 1118, 1620, 1589, 1815, 2216, 2041, 1679, 1652, 1532, 1367];


new Chart("chart4", {
type: "line",
data: {
    labels: xValuesLine,
    datasets: [{
        label: 'Total Sales',
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(165, 42, 42, 1)",
        borderColor: "rgba(165, 42, 42, 1)",
        data: yValuesLine
    }]
},
options: {
    scales: {
        y: {
            ticks: {
                stepSize: 1000,
                callback: function (value, index, values) {
                    return value;
                }
            }
        }
    }
}
});
