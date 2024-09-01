// Please don't change the pre-written code
// Import the necessary modules here

const users = [];
let id = 0;
class UserSchema {
  constructor(name, email, password) {
    this.id = ++id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
export const addUser = (data) => {
  // Write your code here
  const { name, email, password } = data
  const newObj = new UserSchema(name, email, password);

  users.push(newObj);

  return newObj;
};
addUser({ name: "vivek", email: "krvivi28@gmail.com", password: "vivek28@" });

export const confirmLogin = (data) => {
  // Write your code here
  const { email, password } = data;
  const result = users.find(user => user.email == email && user.password === password) || null;

  return result !== null;
};

export const getAllUsers = () => {
  return users;
};
