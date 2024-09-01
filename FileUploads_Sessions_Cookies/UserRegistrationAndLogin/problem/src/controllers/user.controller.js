// Please don't change the pre-written code
// Import the necessary modules here

import { authenticateUser, registerUser } from "../models/user.model.js";

export default class UserController {
  getRegister = (req, res, next) => {
    // Write your code here
    return res.render('user-register.ejs');

  };
  getLogin = (req, res, next) => {
    // Write your code here
    return res.render('user-login.ejs');
  };
  addUser = (req, res) => {
    // Write your code here
    const user = req.body;
    registerUser(user);
    res.render('user-login.ejs');
  };
  loginUser = (req, res) => {
    // Write your code here
    const user = req.body;
    let authorised = authenticateUser(user);
    console.log(authorised)
    if (authorised) {
      return res.status(200).json({ success: "true", message: "login successful" });
    }
    return res.status(401).json({ success: "false", message: "login failed" });
  };
}
