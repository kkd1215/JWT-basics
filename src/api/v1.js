const express = require('express');
const AuthRoutes = require('../modules/auth/routes/v1');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send(`OK - ${req.baseUrl}`);
});

router.use('/auth', AuthRoutes);


module.exports = router;