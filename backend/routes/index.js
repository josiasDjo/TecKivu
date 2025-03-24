const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/authenticateToken');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
