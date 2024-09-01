import express from "express";
import ExpenseController from "./expense.controller.js";

const router = express.Router();

const expenseController = new ExpenseController();

// Route to create a new expense
router.post("/", (req, res) => {
  expenseController.add(req, res);
  console.log("post expense", this);
});

// Route to get expenses based on certain filter criteria
router.get("/filter", (req, res) => {
  expenseController.filter(req, res);
  console.log("get filtered expense route", this);
  console.log('..............................................................................');
});

// Route to get one expense by its ID
router.get("/:id", (req, res) => {
  console.log(expenseController.getOne);
  expenseController.getOne(req, res);
  console.log("Got an expense:", this);
  console.log('..............................................................................');
});

// Route to get all expenses
router.get("/", (req, res) => {
  expenseController.getAll(req, res);
  console.log("getAll route", this);
  console.log('..............................................................................');
});

// Route to add a tag to a specific expense
router.post("/:id/tags", (req, res) => {
  expenseController.addTag(req, res);
  console.log("addTags route", this);
  console.log('..............................................................................');
});

export default router;
