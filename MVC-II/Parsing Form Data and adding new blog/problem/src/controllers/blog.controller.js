// Please don't change the pre-written code
// Import the necessary modules here

import { blogs } from "../models/blog.model.js";

export const renderBlogs = (req, res) => {
  // Write your code here
  res.render('blogs', { blogs })
};
export const renderBlogForm = (req, res) => {
  // Write your code here
  res.render('addBlogForm')
};
export const addBlog = (req, res) => {
  // Write your code here
  const { title, description, img } = req.body;

  blogs.push({ title, description, img });
  console.log(blogs);
  res.render('blogs', { blogs })
};
