import BucketListModel from "./bucketList.model.js";
import BucketListRepository from "./bucketList.repository.js";

export default class BucketListController {
  constructor() {
    // Create a new instance of the repository when the controller is instantiated
    this.bucketListRepository = new BucketListRepository();

    // this.bucketListRepository
  }
  async add(req, res) {
    // const bucketListRepository = new BucketListRepository();
    // console.log("this:", this.bucketListRepository);
    const { title, description, dateAdded, targetDate, isCompleted } = req.body;
    // Refactor to use the repository method
    const item = new BucketListModel(
      title,
      description,
      dateAdded,
      targetDate,
      isCompleted
    );
    console.log("hi in controller.add ...");
    await this.bucketListRepository.addBucketListItem(item)


    res.status(201).send(item);
  };

  async get(req, res) {
    // const bucketListRepository = new BucketListRepository();
    const { title } = req.query;
    // Refactor to use the repository method
    const item = await this.bucketListRepository.findOneBucketListItem(title);

    if (!item) {
      res.status(200).send("Item not found.");
    } else {
      res.status(200).send(item);
    }
  };
}
// console.log("hello");
// const bucketListController = new BucketListController();
// bucketListController.add({
//   body: {
//     title: 1, description: 2, dateAdded: 3, targetDate: 4,
//     isCompleted: 5
//   }
// })