const logger = require('../../../lib/logger');

const dashboard = (req, res, next) => {
  try {
    const { username } = req;
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({ msg: `Hello, ${username}`, secret: `Here is your lucky number ${luckyNumber}` });
  } catch (err) {
    logger.error('ERROR > DASHBOARD > ', err);
    return next(err);
  }
}


module.exports = dashboard;