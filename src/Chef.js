class Chef {
  constructor(name, eatery) {
    this.name = name;
    this.restaurant = eatery;
  }
  greetCustomer(name, morning) {
    if (morning === true) {
      return `Good morning, ${name}!`
    } else {
      return `Hello, ${name}!`;
    }
  }
  checkForFood(foodItemCheck) {
    if (foodItemCheck.name === "Quiche" || foodItemCheck.name === "Kouign Amann") {
      return `Sorry, we aren't serving ${foodItemCheck.name} today.`
    } else {
      return `Yes, we're serving ${foodItemCheck.name} today!`
    }
  }
}

module.exports = Chef;
