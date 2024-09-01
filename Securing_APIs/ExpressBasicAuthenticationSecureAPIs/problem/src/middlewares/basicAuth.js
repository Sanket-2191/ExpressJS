// Please don't change the pre-written code
// Import the necessary modules here
import expressBasicAuth from "express-basic-auth";

import { getAllUsers } from "../features/user/model/user.model.js";

const basicAuthMiddleware = (req, res, next) => {
  // Write your code here
  console.log(req.headers);
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    res.status(401).send("Not authorized.. Please login.");
  }

  const base64Creds = authHeader.replace('Basic', '');

  const decodeCreds = Buffer.from(base64Creds, 'base64').toString('utf-8');

  const creds = decodeCreds.split(':');

  const user = getAllUsers().find(u => u.email === creds[0] && u.password === creds[1]);

  if (user) {
    next();
  } else {
    res.status(401).send("Invalid credentials...");
  }

};

export default basicAuthMiddleware;
