// Please don't change the pre-written code
// Import the necessary modules here

let cartId = 0;
export class cartModel {
  constructor(userId, productId, quantity) {
    this.id = ++cartId;
    this.userId = userId;
    this.productId = productId;
    this.quantity = Number(quantity);
  }
}
const cartItems = [new cartModel(1, 2, 5), new cartModel(3, 3, 10)];

export const addToCart = (userId, productId, quantity) => {
  // Write your code here
  const existingItem = cartItems.find(item => item.userId == userId && item.productId == productId) || null;

  if (existingItem) {
    existingItem.quantity = quantity;
    if (quantity == 0) return removeFromCart(userId, existingItem.id);
    return cartItems;
  }
  else {

    const cartItem = new cartModel(userId, productId, quantity);
    cartItems.push(cartItem);

    return cartItems;
  }
};

export const removeFromCart = (userId, cartItemId) => {
  // Write your code here
  let deletedItem = null;
  const newcartItems = cartItems.filter(item => {
    if (item.id == cartItemId) deletedItem = item;
    return item.id != cartItemId;
  });
  cartItems.length = 0;
  cartItems.push(...newcartItems);
  if (!deletedItem) {
    return "operation not allowed"
  }

  return { deletedItem, id: deletedItem.id, msg: "item deleted" };
}
