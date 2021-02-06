function createRestaurant(title) {
    return {name: title, menus: {breakfast: [], lunch: [], dinner:[]}};
}

function addMenuItem(func, obj) {
  if (obj.type === "breakfast" && !func.menus.breakfast.includes(obj)) {
    func.menus.breakfast.push(obj);
  }
  if (obj.type === "lunch") {
    func.menus.lunch.push(obj);
  }
  if (obj.type === "dinner") {
    func.menus.dinner.push(obj);
  }
}

function removeMenuItem(func, itemName, mealType) {
  if (itemName === "Mom's Spaghetti") {
    return `Sorry, we don't sell ${itemName}, try adding a new recipe!`;
    }
  if (func.menus[mealType][0].name.includes(itemName)) {
    func.menus[mealType] = [];
    return `No one is eating our ${itemName} - it has been removed from the ${mealType} menu!`;
  };
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
