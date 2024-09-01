// Please don't change the pre-written code
// Import the necessary modules here

import express from "express";
import {
  getTweets,
  createTweet,
} from "./src/features/tweet/tweet.controller.js";
const app = express();

// TODO: Refactor these route handlers into tweet.routes.js file using express Router --------->>>>

// Write your code here

// -------------->>>>>>>>>>>>>>>>>>>

// middleware for accessing these routes after refactoring
app.use("/api/tweets", tweetRoutes);

app.listen(5000, () => {
  console.log("server is listening at port 5000");
});

// node upload_project.js eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwcm9ibGVtX2lkIjoiMjY2NjciLCJvZmZlcmluZ19pZCI6IjkwOTQ4MjEiLCJzb3VyY2UiOiJ3ZWIiLCJwcm9ibGVtX3R5cGUiOiJOT0RFIiwiYXV0aG9yaXphdGlvbiI6ImE4ZjcxZjQ5NWNkMDFkNjIwZTFmNWNlZTEyMGQyODVhIn0.PO1KIf5PNr-tGtFMXop6Di6M9o0sXZNY8uk60NXWlOQ