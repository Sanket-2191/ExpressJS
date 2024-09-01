import express from "express";
import path from "path";
import ProductController from "./src/controllers/product.controller.js";
import expressEjsLayouts from "express-ejs-layouts";
const productController = new ProductController();
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));

// app.use(expressEjsLayouts);
app.get("/", productController.getProducts);

export default app;
