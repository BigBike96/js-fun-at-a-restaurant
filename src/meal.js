function nameMenuItem(name) {
  return `Delicious ${name}`;
}

function createMenuItem(item, price, type) {
  return {name: item, price: price, type: type};
}

function addIngredients(string, toppings) {
  if (!toppings.includes(string)) {
      return toppings.push(string);
  }
}

function formatPrice(price) {
  return `$${price}`;
}

function decreasePrice(price) {
  return price - price * .1 ;
}

function createRecipe(title, ingredients, type) {
  return {
    title,
    ingredients,
    type
   };
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
