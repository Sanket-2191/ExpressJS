import express from "express";
import cors from "cors";

import empRoutes from "./routes/employee.route.js";

const app = express();
// Please don't change the pre-written code
// Import the necessary modules here
// Write your code here
const options = {
    origin: "http://127.0.0.1:5500"
}

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin',);
//     next();
// })
app.use(() => console.log("using cors policy library"), cors(options))

app.use("/api/v1/emp", empRoutes);


export default app;
