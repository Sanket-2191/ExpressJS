// Import the necessary modules here
import express from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import { renderBlogForm } from "./src/controllers/blog.controller.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));
app.use(expressEjsLayouts);
app.set('layout', 'layout');

// Write your code here
// app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//     res.send(`New blogs coming soon..............\n 
//     please visit <a href='http://localhost:3000/createblog'>http://localhost:3000/createblog</a> \n
//     to add your own blogs`);
// });
app.use(express.urlencoded({ extended: true }));
app.get('/createblog', renderBlogForm);

app.post('/', (req, res) => {
    const { blog_Title, blog_Description, blog_ImgURL } = req.body;
    console.log(`${blog_Title}, ${blog_Description}, ${blog_ImgURL}`);
});

export default app;
