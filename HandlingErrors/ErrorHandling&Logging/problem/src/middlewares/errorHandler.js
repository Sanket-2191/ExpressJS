// Please don't change the pre-written code
// Import the necessary modules here

import logger from "./logger.middleware.js";

export class customErrorHandler extends Error {
  constructor(statusCode, errMessage) {
    super(errMessage);
    this.statusCode = statusCode;
  }
}

export const errorHandlerMiddleware = async (err, req, res, next) => {
  // Write your code here
  console.log(err instanceof customErrorHandler, err);

  const errorData = ` "request URL": " ${req.url}", "error message": ${err.message}`

  await logger.error(errorData);

  if (err instanceof customErrorHandler) {
    res.status(err.statusCode).send(err.message);
  } else {
    res.status(500).send("Oops! Something went wrong... Please try again later!")
  }
  next();
};
