// Please don't change the pre-written code
// Import the necessary modules here
import path from 'path'
import ProductModel from '../models/product.model.js'
export default class ProductController {
  getProducts = (req, res) => {
    // Write your code here
    const productModel = new ProductModel();
    const allProducts = productModel.fetchProducts();
    return res.render(path.resolve('src/views/product.ejs'), { allProducts });
  };
}
