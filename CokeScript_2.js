// Initially, in calculation mode
let inCalculationMode = true;

function toggleMode() {
  inCalculationMode = !inCalculationMode;
  document.getElementById('toggleModeBtn').innerText = inCalculationMode ? "Switch to Input Mode" : "Switch to Calculation Mode";
  document.getElementById('desiredBricksSection').style.display = inCalculationMode ? "block" : "none";
  document.getElementById('inputSection').style.display = inCalculationMode ? "none" : "block";
  
  if (!inCalculationMode) {
    generateInputFields();
  } else {
    calculateIngredients(); // Recalculate based on desired bricks when switching back
  }
}

function generateInputFields() {
  const inputSection = document.getElementById('inputSection');
  inputSection.innerHTML = ''; // Clear previous inputs
  const ingredients = ['cocoa', 'acid', 'water', 'soda', 'actionFigure'];
  ingredients.forEach(ingredient => {
    const label = document.createElement('label');
    label.innerText = `${ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}:`;
    const input = document.createElement('input');
    input.type = 'number';
    input.id = `${ingredient}Input`;
    input.value = 0;
    input.oninput = () => updateIngredient(ingredient, parseFloat(input.value));
    inputSection.appendChild(label);
    inputSection.appendChild(input);
    inputSection.appendChild(document.createElement('br'));
  });
}

// Update the calculateIngredients and updateIngredient functions to handle both modes

// Example of updated updateIngredient function
function updateIngredient(ingredient, amount) {
  if (inCalculationMode) {
    // Calculation logic as before
  } else {
    // Direct input mode; just update table without calculation
  }
}

// Initial setup
toggleMode(); // Ensure initial UI setup is correct
