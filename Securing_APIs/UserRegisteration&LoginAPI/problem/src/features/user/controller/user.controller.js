// Please don't change the pre-written code
// Import the necessary modules here

import { addUser, confirmLogin } from "../model/user.model.js";

export const registerUser = (req, res, next) => {
  // Write your code here
  const { name, email, password } = req.body;

  const result = addUser({ name, email, password });

  res.status(201).json({ "status": "success", "user": result });

  next();
};

export const loginUser = (req, res) => {
  // Write your code here
  const { email, password } = req.body;

  const auth = confirmLogin({ email, password });

  if (auth) {
    res.status(200).json({ "status": "success", "msg": "login successful" });
    next();
  }
  else res.status(400).json({ "status": "failure", "msg": "invalid user details" });

};

// node upload_project.js eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwcm9ibGVtX2lkIjoiMjY5NTIiLCJvZmZlcmluZ19pZCI6IjkwOTQ4NDEiLCJzb3VyY2UiOiJ3ZWIiLCJwcm9ibGVtX3R5cGUiOiJOT0RFIiwiYXV0aG9yaXphdGlvbiI6ImE4ZjcxZjQ5NWNkMDFkNjIwZTFmNWNlZTEyMGQyODVhIn0.vM8uB3UYe_xDkZQvHRjWe2IysBpZguAbJbzENAtCSyM