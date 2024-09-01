// Please don't change the pre-written code


export const validateBlog = (req, res) => {
  // Write your code here
  const { title, description, image } = req.body;
  title.trim();
  description.trim();
  image.trim();
  const errorList = [];
  if (!title) {
    errorList.push(" The title field should not be empty.");
  }
  if (title.length < 3) {
    errorList.push("The title field should contain at least 3 characters.");
  }
  if (!description) {
    errorList.push("The description field should not be empty.")
  }
  if (description.length < 10) {
    errorList.push("The description field should contain at least 10 characters..");
  }
  try {
    let validURL = new URL(image)
  } catch (err) {
    errorList.push("The image URL provided should be a valid URL.")
  }

  console.log(errorList);
  // 206 response for partial information.......
  if (errorList.length > 0) {
    return res.status(206).render("addBlog", { errors: errorList, success: false });
  }

  return res.status(201).render("addBlog", { errors: errorList, success: true });
};

export const renderBlogForm = (req, res) => {
  res.render("addBlog", { errors: null, success: false });
};
