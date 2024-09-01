// Please don't change the pre-written code
// Import the necessary modules here

import express from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import { addBlog, renderBlogs, renderBlogForm } from "./src/controllers/blog.controller.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));
app.use(expressEjsLayouts);
app.set('layout', 'layout');
app.use(express.urlencoded({ extended: true }));
// Write your code hereapp.get
app.get('/', renderBlogs);
app.get('/createblog', renderBlogForm);
app.post('/addBlog', addBlog);
export default app;
