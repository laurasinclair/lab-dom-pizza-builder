// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'Pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// const btn = document.getElementsByClassName('.btn');


// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`

  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`

  document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

  document.querySelectorAll('.whitesauce-white').forEach((oneWhiteSauce) => {
    if (state.whiteSauce) {
      oneWhiteSauce.style.visibility = 'visible';
    } else {
      oneWhiteSauce.style.visibility = 'hidden';
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

  document.querySelectorAll('.crust-gluten-free').forEach((oneGlutenFreeCrust) => {
    if (state.glutenFreeCrust) {
      oneGlutenFreeCrust.style.visibility = 'visible';
    } else {
      oneGlutenFreeCrust.style.visibility = 'hidden';
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelector('.btn').classList.remove('active');

  document.querySelector('.btn').addEventListener('click', () => {
    document.querySelector('.btn').classList.toggle('active');
  })
}

function renderPrice() {
  let accPrice = 0


// const ingredients = {
//   pepperoni: { name: 'Pepperoni', price: 1 },
//   mushrooms: { name: 'Mushrooms', price: 1 },
//   greenPeppers: { name: 'Green Peppers', price: 1 },
//   whiteSauce: { name: 'White sauce', price: 3 },
//   glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
// };

// const state = {
//   pepperoni: true,
//   mushrooms: true,
//   greenPeppers: true,
//   whiteSauce: false,
//   glutenFreeCrust: false
// };







  const el = Object.entries(ingredients).map((element, index) => {
    element[1].state = state.element
    return element
  })

  let stateIngredients = Object.entries(el).filter((e) => e[1] === true);
  
  console.log(el)

  Object.entries(ingredients).map((ingredient, index) => {
    // console.log(ingredient[0], ingredient[1].name, ingredient[1].price)
    

  const el = Object.entries(state).map((element, index) => {
    if (element[1] === true) { 
      return element[index]
    }
  })

    // console.log(el)
    // return state.ingredient[0] ? accPrice += ingredient[1].price : accPrice

  })


  state.pepperoni ? accPrice += ingredients.pepperoni.price : accPrice

  state.mushrooms ? accPrice += ingredients.mushrooms.price : accPrice
  
  state.greenPeppers ? accPrice += ingredients.greenPeppers.price : accPrice

  state.whiteSauce ? accPrice += ingredients.whiteSauce.price : accPrice

  state.glutenFreeCrust ? accPrice += ingredients.glutenFreeCrust.price : accPrice

  totalPrice = accPrice + 10
  document.querySelector('.price-base span.price').innerHTML = basePrice
  document.querySelector('.totalPrice span.price').innerHTML = totalPrice

  return totalPrice


// Displays the list of all items selected
// Displays the total price.
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
