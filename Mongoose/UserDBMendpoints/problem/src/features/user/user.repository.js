// Please don't change the pre-written code
// Import the necessary modules here

import { UserSchema } from "./user.schema.js";

import bcrypt from 'bcrypt';

// Assuming UserSchema is your model, you should use mongoose model like this
import mongoose from 'mongoose';
const Users = mongoose.model('Users', UserSchema);

export const userRegisterationRepo = async (userData) => {
  // Write your code here
  try {
    const user = new Users(userData);
    const result = await user.save();

    return {
      success: true,
      res: user
    };
  } catch (err) {
    // Check if the error is a Mongoose validation error
    // console.log("Error has occured:\n", err);
    if (err.name === 'ValidationError') {
      const errorMessages = Object.values(err.errors).map(error => error.message);
      return {
        success: false,
        error: {
          statusCode: 400,
          msg: errorMessages.join(', '),
        },
      };
    }

    if (err.code && err.code === 11000) {
      // Handle unique constraint errors
      const field = Object.keys(err.keyPattern)[0];
      const value = userData[field]; // Extract the conflicting value from userData
      return {
        success: false,
        error: {
          statusCode: 409,
          msg: `${field.charAt(0).toUpperCase() + field.slice(1)} "${value}" already exists`,
        },
      };
    }

    // Handle other types of errors
    return {
      success: false,
      error: {
        statusCode: 503,
        msg: "Something went wrong:-{( Please try again."
      }
    };
  }
};
export const userLoginRepo = async (userData) => {
  // Write your code here
  // password = await bcrypt.hash(password, 12);
  try {
    const user = await Users.findOne({ email: userData.email });

    if (!user) {
      return {
        success: false,
        error: {
          statusCode: 404,
          msg: "User not found"
        }
      };
    }

    const isPasswordValid = await bcrypt.compare(userData.password, user.password);

    if (isPasswordValid) {
      return {
        success: true,
        res: user
      };
    } else {
      return {
        success: false,
        error: {
          statusCode: 401,
          msg: "Invalid password"
        }
      };
    }
  } catch (err) {
    return {
      success: false,
      error: {
        statusCode: 400,
        msg: "Something went wrong:-{( Please try again."
      }
    };
  }
};

export const updateUserPasswordRepo = async (_id, newpassword, next) => {
  // Write your code here
  try {
    const hashedPassword = await bcrypt.hash(newpassword, 12);
    const user = await Users.findByIdAndUpdate(_id, { password: hashedPassword }).exec();

    return {
      success: true,
      res: user
    };
    // next({
    //   success: true,
    //   res: user
    // });
  } catch (err) {
    // next(new customErrorHandler(resp.error.statusCode, resp.error.msg));

    next(new customErrorHandler(
      400,
      "encounterd error in updating password"
    ))


  }
};
