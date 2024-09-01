// Import the necessary modules here

import ProductModel from '../models/product.model.js'

export default class ProductController {
  getProducts = (req, res) => {
    //  Write your code here
    const productModel = new ProductModel();
    const products = productModel.fetchProducts();
    return res.send(products)
  };
}
