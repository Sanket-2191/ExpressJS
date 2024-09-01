// Please don't change the pre-written code
// Import the necessary modules here

export const users = [
  {
    id: 1,
    name: "coding ninjas",
    email: "ninja@gmail.com",
    image: "https://entrackr.com/storage/2022/10/Coding-Ninjas.jpg",
  },
];

export const updateUsers = (user) => {
  // Write your code here
  const toUpdate = users.find(userFind => userFind.id == user.id)
  console.log("user.name: ", user.name);
  console.log("toUpdate: ", toUpdate);

  if (user.name) toUpdate.name = user.name;
  if (user.email) toUpdate.email = user.email;
  if (user.image) toUpdate.image = user.image;

  return users;
};
