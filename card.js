import salesByCategory from './salesByCategory.json' assert { type: 'json' };

console.log(salesByCategory);

function updateCategorySales() {
   const categories = salesByCategory.reduce((acc, category) => {
      acc[category.Category] = parseInt(category.total_sales).toLocaleString();
      return acc;
   }, {});

   document.getElementById('food-category').querySelector('h3').textContent = categories.Food || 'N/A';
   document.getElementById('water-category').querySelector('h3').textContent = categories.Water || 'N/A';
   document.getElementById('carbonated-category').querySelector('h3').textContent = categories.Carbonated || 'N/A';
   document.getElementById('non-carbonated-category').querySelector('h3').textContent = categories['Non Carbonated'] || 'N/A';
}

document.addEventListener('DOMContentLoaded', updateCategorySales);
