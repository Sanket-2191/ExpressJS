import express, { urlencoded } from "express";
import confessionRouter from "./src/features/confession/confession.routes.js";

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use("/api/confessions", confessionRouter);

export default app;


app.get('/sellProduct', (req, res) => {
    const { type, maxPrice, minPrice, usageYears } = req.query; // type of product to sell, range in which user want to sell, how old is the product can add desc for product tooo.....

    // if you want to create post of the product that you want to sell
    createSellPost({ type, maxPrice, minPrice, usageYears });


})