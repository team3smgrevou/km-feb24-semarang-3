import salesCategoryByLocation from './salesCategoryByLocation.json' assert {type : 'json'}

console.log(salesCategoryByLocation)

var dataJSON = salesCategoryByLocation

var food =[]
var carbonated = []
var nonCarbonated = []
var water = []


for (var i=0;i<salesCategoryByLocation.length;i++){
    
    if (salesCategoryByLocation[i].category == "Food"){
        food = [salesCategoryByLocation[i].GuttenPlans , salesCategoryByLocation[i].EB_Public_Library , salesCategoryByLocation[i].Brunswick_Sq_Mall , salesCategoryByLocation[i].Earle_Asphalt]
    }

    if (salesCategoryByLocation[i].category == "Carbonated"){
        carbonated = [salesCategoryByLocation[i].GuttenPlans , salesCategoryByLocation[i].EB_Public_Library , salesCategoryByLocation[i].Brunswick_Sq_Mall , salesCategoryByLocation[i].Earle_Asphalt]
    }

    if (salesCategoryByLocation[i].category == "Non Carbonated"){
        nonCarbonated = [salesCategoryByLocation[i].GuttenPlans , salesCategoryByLocation[i].EB_Public_Library , salesCategoryByLocation[i].Brunswick_Sq_Mall , salesCategoryByLocation[i].Earle_Asphalt]
    }

    if (salesCategoryByLocation[i].category == "Water"){
        water = [salesCategoryByLocation[i].GuttenPlans , salesCategoryByLocation[i].EB_Public_Library , salesCategoryByLocation[i].Brunswick_Sq_Mall , salesCategoryByLocation[i].Earle_Asphalt]
    }
}

var ctx5 = document.getElementById('chart5').getContext('2d');
var myChart = new Chart(ctx5, {
    type: 'bar',
    data: {
        labels: ['GuttenPlans', 'EB Public Library','Brunswick Sq Mall','Earle Asphalt',],
        datasets: [
            {
            label: 'Food',
            data: food,
            backgroundColor: 'rgba(128, 0, 0, 0.5)',
            borderColor: 'rgba(128, 0, 0, 1)', 
            borderWidth: 1
        }, {
            label: 'Carbonated',
            data: carbonated,
            backgroundColor: 'rgba(255, 0, 0, 0.5)', 
            borderColor: 'rgba(255, 0, 0, 1)', 
            borderWidth: 1
        }, {
            label: 'Non Carbonated',
            data: nonCarbonated,
            backgroundColor: 'rgba(255, 40, 0, 0.5)', 
            borderColor: 'rgba(255, 40, 0, 1)', 
            borderWidth: 1
        }, {
            label: 'Water',
            data: water,
            backgroundColor: 'rgba(248, 131, 121, 0.5)', 
            borderColor: 'rgba(248, 131, 121, 1)', 
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
