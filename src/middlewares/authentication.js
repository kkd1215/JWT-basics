const jwt = require('jsonwebtoken');
const HTTPStatus = require('http-status');

const config = require('../config');
const APIError = require('../lib/api-error');
const logger = require('../lib/logger');

const authentication = async (req, res, next) => {
  let token = req.get('Authorization') || req.get('authorization') || req.query.access_token;
  if (!token) {
    req.isAuthenticated = false;
    return next();
  }
  if (typeof token === 'string') {
    token = token.replace('Bearer ', '');
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.accessToken = {
      token,
      data: decoded || {},
    };
    req.username = decoded.username;
    req.isAuthenticated = true;
    return next();
  } catch (exec) {
    let message = 'Unauthorized!';
    if (exec.message && exec.message.indexOf('expired') > -1) {
      message = 'Your session has expired. Please login again!';
    }
    logger.error('EXEC > INVALID_TOKEN > ', exec);
    const err = new APIError(message, HTTPStatus.UNAUTHORIZED);
    return next(err);
  }
};

module.exports = authentication;