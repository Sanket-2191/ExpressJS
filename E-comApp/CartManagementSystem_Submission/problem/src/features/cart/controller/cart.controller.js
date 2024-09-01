// Please don't change the pre-written code
// Import the necessary modules here

import { addToCart, removeFromCart } from "../model/cart.model.js";

export const addToCartController = (req, res) => {
  // Write your code here
  const { productId, quantity } = req.query;
  const userId = req.userId;

  const item = addToCart(userId, productId, quantity);


  // if (item.msg) res.status(201).json({ success: true, deletedCartItem: item.deletedItem });
  res.status(201).json({ success: true, item: item });


};

export const removeFromCartController = (req, res) => {
  // Write your code here
  console.log(req.param);
  const cartItemId = req.params.itemId;
  const userId = req.userId;

  const deletedCartItem = removeFromCart(userId, cartItemId);

  if (deletedCartItem.id) res.status(201).json({ success: true, deletedCartItem });
  else {
    res.status(401).json({ success: false, deletedCartItem });
  }
};
