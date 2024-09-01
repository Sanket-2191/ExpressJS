// Please don't change the pre-written code.

const express = require("express");
const app = express();
const path = require('path')

const logRequest = (req, res, next) => {
  // Write your code here
  console.log(req.method);
  console.log(req.path);
  next();
};
const globalAccessFun = (req, res, next) => {
  console.log('Global Access to everyone');
  next();
}

app.use(globalAccessFun)
app.use(express.static('public'))
app.use('/test', express.static(path.resolve('./src')))

// This route should only be accessible after passing through the 'logRequest' middleware. 
// Make necessary changes in the route below.
app.get("/", logRequest, (req, res) => {
  console.log('in the log request...');
  res.send("Coding Ninjas!");
});

app.get('/test', (req, res) => {
  console.log('in the Test request...');

  // res.sendFile(path.resolve('src/ayx.html'));
})



module.exports = app;
