import ExpenseModel from "./expense.model.js";
import ExpenseRepository from "./expense.repository.js";

export default class ExpenseController {
  constructor() {
    this.expenseRepository = new ExpenseRepository();
    console.log(this);
  }

  // Create new expense
  add = async (req, res) => {
    try {
      const { title, amount, date, isRecurring, tags } = req.body;
      const expense = new ExpenseModel(title, amount, date, isRecurring, tags);

      const result = await this.expenseRepository.addExpense(expense);

      console.log("add controller", result, expense, this);
      console.log('..............................................................................');
      res.status(201).send(expense)
    } catch (err) {
      console.log(err);
      throw new Error("Something went wrong");
    }

  };

  // Get a specific expense
  getOne = async (req, res) => {
    try {
      const { id } = req.params;

      const result = await this.expenseRepository.getOne(id);

      console.log("getOne controller", result);
      console.log('..............................................................................');
      res.status(200).send(result)
    } catch (err) {
      console.log(err);
      throw new Error("Something went wrong");
    }
  };

  // Get all expenses
  getAll = async (req, res) => {
    try {

      const result = await this.expenseRepository.getAllExpenses();

      console.log("getAll controller", result, this);
      console.log('..............................................................................');
      res.status(200).send(result)
    } catch (err) {
      console.log(err);
      throw new Error("Something went wrong");
    }

  };

  // Add a tag to an expense
  addTag = async (req, res) => {
    try {
      const { id } = req.params;
      const { tag } = req.body;


      const result = await this.expenseRepository.addTagToExpense(id, tag);

      console.log("addTag controller", tag, result);
      console.log('..............................................................................');
      res.status(200).send(result)
    } catch (err) {
      console.log(err);
      throw new Error("Something went wrong");
    }
  };

  // Filter expenses based on given criteria
  filter = async (req, res) => {
    try {
      const { minAmount, maxAmount, isRecurring } = req.query;

      console.log("filter controller", { minAmount, maxAmount, isRecurring });
      const result = await this.expenseRepository.filterExpenses({ minAmount, maxAmount, isRecurring });


      console.log(result, 'filter\n..............................................................................');
      res.status(200).send(result)
    } catch (err) {
      console.log(err);
      throw new Error("Something went wrong");
    }
  };
}
