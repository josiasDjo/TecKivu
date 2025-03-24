const express = require('express');
const router = express.Router();
const ProductCardController = require('../controllers/productCardController');

router.get('/', ProductCardController.getAllProducts);

module.exports = router;