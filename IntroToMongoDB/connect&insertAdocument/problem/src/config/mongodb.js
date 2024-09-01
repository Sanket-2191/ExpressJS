// 1. Import MongoDB Client
import { MongoClient } from "mongodb";

let Client;
const url = "mongodb://localhost:27017/confession";
// const dbName = "confessionsdb";
// 2. Function to connect to the database
export const connectToMongoDB = () => {
    MongoClient.connect(url)
        .then(mongoClient => {
            Client = mongoClient;
        })
        .catch(err => {
            console.log(err);
        })
};

// 3. Function to access the database
export const getDB = () => {
    return Client.db();
};
