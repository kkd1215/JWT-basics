const logger = require('../../../lib/logger');
const CONFIG = require('../../../config');

const jwt = require('jsonwebtoken');

const login = (req, res, next) => {
  try {
    const { username, password } = req.body;
    
    if (!username || !password) {
      throw new Error('no email pass');
    }

    const id = new Date().getDate();

    const token = jwt.sign({ id, username }, CONFIG.jwtSecret, { expiresIn: '1d' });
    
    res.status(200).json({ msg: 'user created', token });

  } catch (err) {
    logger.error('ERROR > LOGIN > ', err);
    return next(err);
  }
}


module.exports = login;