// Please don't change the pre-written code
// Import the necessary modules here
import fs from 'fs'
// Write your code here
const fsPromise = fs.promises;

const log = async (data) => {
  await fsPromise.appendFile('log.txt', `${new Date()} - Log:` + data)
}

export const loggerMiddleware = async (req, res, next) => {
  // Write your code here
  if (req.url.includes('/api/user')) {
    const data = `\n Req URL: ${req.url}\n >> Req Body: ${JSON.stringify(req.body)}\n  `
    await log(data);
  }
  next();
};

export default loggerMiddleware;
