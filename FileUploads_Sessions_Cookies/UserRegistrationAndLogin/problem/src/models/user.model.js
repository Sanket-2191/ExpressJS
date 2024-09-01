// Please don't change the pre-written code
// Import the necessary modules here

export const users = [
  { id: 1, name: "vivek", email: "krvivi28@gmail.com", password: "vivek28@" },
];

export const registerUser = (user) => {
  // Write your code here
  const newUser = {
    id: users.length + 1,
    name: user.name,
    email: user.email,
    password: user.password
  }

  users.push(newUser);
  // console.log(users);
  // console.log("__________________________________________________________________________________________________________");


};

export const authenticateUser = (reqUser) => {
  // Write your code here
  // console.log(reqUser);
  // console.log(users);
  // console.log("__________________________________________________________________________________________________________");
  let auth = false;
  users.forEach(user => {
    // console.log("emails:", user.email === reqUser.email);
    // console.log("passwords:", user.password === reqUser.password);
    if (user.email === reqUser.email && user.password === reqUser.password) {
      // console.log(user, "returned true.....");
      auth = true;
    }
  })

  return auth;
};
