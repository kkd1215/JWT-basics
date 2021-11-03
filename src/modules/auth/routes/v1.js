const express = require('express');
const { controller } = require('..');
const middlewares = require('../../../middlewares');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send(`OK - ${req.baseUrl}`);
});

/** POST /api/v1/auth/login - Login API */
router.route('/login').post(controller.login);

/** GET /api/v1/auth/dashboard - Dashboard API */
router.route('/dashboard').get(middlewares.authentication, controller.dashboard);

module.exports = router;