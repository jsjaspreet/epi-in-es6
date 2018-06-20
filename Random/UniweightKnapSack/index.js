function* getPurchases(items, money, purchases) {
  const cheapestItem = items[0];
  if (items.length === 0 || money < cheapestItem) {
    yield purchases;
    return;
  }
  for (let i = 0; i < items.length; i++) {
    let currItem = items[i];
    if (money >= currItem) {
      const newArray = [...items.slice(0, i), ...items.slice(i + 1)];
      console.log('currItem', currItem);
      console.log('newArray', newArray);
      console.log('prevPurchases', purchases);
      const newPurchases = [...purchases, currItem];
      console.log('newPurchases', newPurchases);
      yield* getPurchases(newArray, money - currItem, newPurchases);
    }
  }
}

module.exports = function (items, money) {
  const sortedItems = items.sort((a, b) => a - b);
  const purchases = [...getPurchases(sortedItems, money, [])];
  console.log('purchases', purchases);
  let largestCost = 0;
  let largestOrder = [];
  for (const order of purchases) {
    const orderCost = order.reduce((acc, curr) => acc + curr);
    if (orderCost > largestCost) {
      largestOrder = order;
      largestCost = orderCost;
    }
  }
  return largestOrder;
};