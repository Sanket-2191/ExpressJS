import { ObjectId } from "mongodb";
import { getDB } from "../../config/mongodb.js";

class ExpenseRepository {
  constructor() {
    this.collectionName = "expenses"; // name of the collection in mongodb
  }

  // Create a new expense
  async addExpense(expense) {

    try {
      const db = getDB();
      const collection = db.collection(this.collectionName);

      const result = await collection.insertOne(expense);

      return result;
    } catch (err) {
      console.log(err);
      throw new Error("Something went wrong");
    }

  }

  // Get one expnese by its ID
  async getOne(id) {
    try {
      const db = getDB();
      const collection = db.collection(this.collectionName);

      const result = await collection.findOne({ _id: new ObjectId(id) });

      return result;
    } catch (err) {
      console.log(err);
      throw new Error("Something went wrong");
    }
  }

  // Get all expenses
  async getAllExpenses() {
    try {
      const db = getDB();
      const collection = db.collection(this.collectionName);

      const result = await collection.find().toArray();

      return result;
    } catch (err) {
      console.log(err);
      throw new Error("Something went wrong");
    }
  }

  // Add tag to an expense
  async addTagToExpense(id, tag) {
    try {
      const db = getDB();
      const collection = db.collection(this.collectionName);

      const result = await collection.updateOne({ _id: new ObjectId(id) }, { $push: { tags: tag } });

      return result;
    } catch (err) {
      console.log(err);
      throw new Error("Something went wrong");
    }
  }

  // Filter expenses based on date, amount, and isRecurring field
  async filterExpenses(criteria) {
    // { minAmount, maxAmount, isRecurring }

    try {
      const filter = {};

      if (criteria.minAmount) filter.amount = { $gte: parseInt(criteria.minAmount) };
      if (criteria.maxAmount) filter.amount = { ...filter.amount, $lte: parseInt(criteria.maxAmount) };
      if (criteria.isRecurring !== undefined) filter.isRecurring = Boolean(criteria.isRecurring);
      console.log("given filter:", filter);
      const db = getDB();
      const collection = db.collection(this.collectionName);

      const result = await collection.find(filter).toArray();

      return result;
    } catch (err) {
      console.log(err);
      throw new Error("Something went wrong");
    }
  }

}

export default ExpenseRepository;
