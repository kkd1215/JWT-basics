const express = require('express')
const v1Routes = require('./v1');

const apiRouter = express.Router()

apiRouter.get('/', (req, res) => {
  res.status(200).send(`OK - ${req.url}`);
})

apiRouter.use('/v1', v1Routes);

module.exports = apiRouter;