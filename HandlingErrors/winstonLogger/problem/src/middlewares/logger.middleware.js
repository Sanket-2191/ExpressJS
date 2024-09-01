// Please don't change the pre-written code
// Import the necessary modules here
import winston from 'winston'

const { combine, timestamp, json } = winston.format;
// Write your code here
const logger = winston.createLogger({
  level: 'info',
  format: combine(timestamp(), json()),
  defaultMeta: { service: 'request-logging' },
  transports: [
    new winston.transports.File({
      filename: 'combined.log',
    }),
    new winston.transports.File({
      filename: 'error.log',
      level: 'error',
    }),
  ]
});

export const loggerMiddleware = async (req, res, next) => {
  // Write your code here

  const data = `/n ${req.url} :/n ${JSON.stringify(req.body)} `

  logger.info(data);

  next();

};
export default loggerMiddleware;
