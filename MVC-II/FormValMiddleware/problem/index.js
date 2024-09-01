import express from "express";
import { newUser } from "./user.controller.js";
// Please don't change the pre-written code
// Import the necessary modules here
import { formValidationMiddleware } from "./middleware.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
//  Modify 'app.post("/new", newUser);' route handler to use the 'formValidationMiddleware'.
app.post("/new", formValidationMiddleware, newUser);

export default app;
