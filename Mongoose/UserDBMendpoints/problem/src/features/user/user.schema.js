// Import the necessary modules here

// Start creating your user schema here
import { Schema } from "mongoose";
// import mongooseUniqueValidator from 'mongoose-unique-validator';
// const validateEmail = function (email) {
//     const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     return regex.test(email);
// };
export const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minLength: [3, 'Name must be at least 3 characters long']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        match: [/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/],
        unique: true
    },
    mobile: {
        type: Number,
        required: [true, 'Mobile number is required'],
        unique: true
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],
        min: [0, 'Age cannot be less than 0'],
        max: [100, 'Age cannot be more than 100']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        unique: true
    },
    type: {
        type: String,
        required: [true, 'Type is required'],
        enum: {
            values: ['student', 'fresher', 'experienced'],
            message: 'Type must be either student, fresher, or experienced'
        }
    }
});

// Apply the unique validator plugin to UserSchema
// UserSchema.plugin(mongooseUniqueValidator, { message: '{PATH} already exists' });