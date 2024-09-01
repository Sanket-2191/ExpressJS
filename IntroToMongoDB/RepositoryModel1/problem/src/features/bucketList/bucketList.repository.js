// Please don't change the pre-written code
// Import the necessary modules here

import { getDB } from "../../config/mongodb.js";
import BucketListModel from "./bucketList.model.js";

class BucketListRepository {
  async addBucketListItem(newItem) {
    const db = getDB();

    await db.collection("bucketListItems").insertOne(newItem);

    return newItem;
  }

  async findOneBucketListItem(title) {
    const db = getDB();
    // Print all items to verify the content of the collection
    // console.log(await db.collection("bucketListItems").find().toArray());

    // Perform the query and log the input title
    console.log("Searching for title:", title);
    const item = await db.collection("bucketListItems").findOne({ "title": title });

    // Log the result of the query
    console.log("Found item:", item);

    return item;
  }
}

export default BucketListRepository;
