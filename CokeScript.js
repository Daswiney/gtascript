let ingredientCosts = { cocoa: 0.00, acid: 0.00, water: 4.00, soda: 0.00, actionFigure: 10000.00 };
let grandTotalCost = 0;

document.addEventListener('DOMContentLoaded', () => {
    updateProductionAndProfit();
    // Initialize ingredient cost inputs
    Object.keys(ingredientCosts).forEach(ingredient => {
        document.getElementById(`cost${capitalizeFirstLetter(ingredient)}`).value = ingredientCosts[ingredient];
    });
});

function updateProductionAndProfit() {
    const bricks = parseInt(document.getElementById('bricks').value) || 1;
    updateCostTable(calculateIngredients(bricks));
    calculateProfit();
}

function updateIngredientCost(ingredient, newCost) {
  ingredientCosts[ingredient] = parseFloat(newCost);
  updateProductionAndProfit(); // Recalculate costs and profit
}

function calculateIngredients(bricks) {
    // Simplified calculation logic
    return { 
       cocoa: ((bricks*150)/5)*9,
       acid: ((bricks*150)/5)*3,
       water: ((bricks*150)/5)*3,
       soda: (bricks*150)/5 ,
       actionFigure: bricks
         };
}

function updateCostTable(ingredients) {
    const costTableBody = document.getElementById('costTable').querySelector('tbody');
    costTableBody.innerHTML = '';
    grandTotalCost = 0;

    Object.entries(ingredients).forEach(([ingredient, amount]) => {
        const cost = amount * ingredientCosts[ingredient];
        grandTotalCost += cost;
        costTableBody.innerHTML += `<tr><td>${capitalizeFirstLetter(ingredient)}</td><td>${amount}</td><td>${formatCurrency(cost)}</td></tr>`;
    });
    calculateProfit(); // Ensure profit is recalculated to reflect cost changes
}

function calculateProfit() {
    const bricks = parseInt(document.getElementById('bricks').value) || 1;
    const sellingPrice = parseFloat(document.getElementById('sellingPrice').value) || 0;
    const totalRevenue = bricks * sellingPrice;
    const profit = totalRevenue - grandTotalCost;

    const profitTableBody = document.getElementById('profitTable').querySelector('tbody');
    profitTableBody.innerHTML = `<tr><td>Total Revenue</td><td>${formatCurrency(totalRevenue)}</td></tr>
                                 <tr><td>Total Cost</td><td>${formatCurrency(grandTotalCost)}</td></tr>
                                 <tr><td>Profit</td><td>${formatCurrency(profit)}</td></tr>`;
}

function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
