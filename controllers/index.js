var express = require('express')
  , router = express.Router();

router.use('/v1/actions', require('./v1'));

module.exports = router;
