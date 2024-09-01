// Please don't change the pre-written code
// Import the necessary modules here
// Write your code here

import { fetchAllProducts, rateProductModel } from "../model/product.model.js";

export const getAllProducts = (req, res, next) => {
  const products = fetchAllProducts();
  res.json({ success: true, products });
};
export const getOneProduct = (req, res, next) => {
  res.json({ success: true, msg: "getOneProduct working" });
};
export const addProduct = (req, res, next) => {
  res.json({ success: true, msg: "addProduct working" });
};
export const rateProduct = (req, res, next) => {
  // Write your code here
  const { productId, rating } = req.query;
  // console.log(req.user);
  const { userId, userEmail } = req.cookies.user;
  console.log(productId, userId, rating);
  const product = rateProductModel(productId, userId, rating);
  if (!product.id) {
    res.json({ success: false, msg: product });
  }
  else res.json({ success: true, product });
};
