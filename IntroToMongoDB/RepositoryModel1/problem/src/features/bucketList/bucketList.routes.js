import express from "express";
import BucketListController from "./bucketList.controller.js";

const router = express.Router();

const bucketListController = new BucketListController();

router.post("/", (req, res) => bucketListController.add.call(this));
router.get("/", (req, res) => bucketListController.get.call(this));

export default router;
