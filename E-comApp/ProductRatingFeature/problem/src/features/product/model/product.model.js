// Please don't change the pre-written code
// Import the necessary modules here


import { getAllUsers } from "../../user/model/user.model.js";

let id = 3;
const products = [
  { id: 1, name: "iphone", price: 100000 },
  { id: 2, name: "oneplus", price: 50000 },
  { id: 3, name: "samsung", price: 60000 },
];

export const fetchAllProducts = () => {
  return products;
};

export const rateProductModel = (productId, userId, rating) => {
  // Write your code here

  if (rating < 0 || rating > 5) return "rating should be b/w 0 and 5";

  const user = getAllUsers().find(u => u.id == userId);

  if (!user) return "user not found";

  const product = fetchAllProducts().find(p => p.id == productId);

  if (!product) return "product not found"

  if (!product.ratings) {
    product.ratings = {
      [userId]: { userId, userName: user.name, rating }
    }
  } else {
    if (!product.ratings[userId]) {
      product.ratings = {
        ...product.ratings, [userId]: { userId, userName: user.name, rating }
      }
    }
    else {
      product.ratings[userId].rating = rating;
    }
  }

  return product;
};
// export const rateProductModel = (productId, userId, rating) => {
//   const user = getAllUsers().find(u => u.id == userId);

//   if (!user) {
//     return "User not Found.";
//   }

//   const product = fetchAllProducts().find(p => p.id == productId);

//   if (!product.ratings) {
//     product.ratings = {
//       [userId]: { userId, userName: user.name, rating }
//     };
//   } else {
//     if (!product.ratings[userId]) {
//       product.ratings = {
//         ...product.ratings,
//         [userId]: { userId, userName: user.name, rating }
//       };
//     } else {
//       product.ratings[userId].rating = rating;
//     }
//   }

//   return product;
// };
