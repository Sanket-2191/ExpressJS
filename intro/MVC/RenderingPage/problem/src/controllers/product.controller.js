// Please don't change the pre-written code
// Import the necessary modules here
import express from "express";
import path from "path";
export const getProducts = (req, res) => {
  // Wite your code here
  return res.sendFile('SRC.html', { 'root': path.resolve('src', 'views') }, function (err) {
    if (err) {
      console.error('Error sending file:', err);
    } else {
      console.log('Sent:', 'index.html');
    }

  })
  // return res.send("path.resolve('src')")
};
