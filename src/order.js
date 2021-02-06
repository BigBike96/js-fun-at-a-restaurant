function takeOrder(obj, array) {
  if (array.length < 3)
  array.push(obj);
}

function refundOrder(number, array) {
  array.splice(number - 1, 1)
}

function listItems(array) {
  var string = [];
  for (var i = 0; i < array.length; i++) {
    string.push(array[i].item);
    if (string.length === array.length) {
      return `${string[0]}, ${string[1]}, ${string[2]}`;
    }
  }
}

function searchOrder(arrayOfOrders, itemOnList) {
  var orders = [];
  for (var i = 0; i < arrayOfOrders.length; i++) {
    orders.push(arrayOfOrders[i].item);
    if (orders.length === arrayOfOrders.length) {
      return orders.includes(itemOnList);
    }
  }
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
