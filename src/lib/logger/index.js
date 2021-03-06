  const winston = require('winston');

const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.timestamp(),
    winston.format.simple(),
  ),
});

if (!process.env.NODE_ENV || (process.env.NODE_ENV === 'development')) {
  logger.level = 'debug';
}

module.exports = logger;