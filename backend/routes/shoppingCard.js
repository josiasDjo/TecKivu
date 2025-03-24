const express = require('express');
const router = express.Router();
const ShoppingCardController = require('../controllers/shoppingCardController');

router.post('/add-to-shopping-card', ShoppingCardController.addToShoppingCard);
router.get('/get-shopping-card', ShoppingCardController.getShoppingCard);
router.put('/');
router.delete('/remove-from-shopping-card', ShoppingCardController.removeProduct);

module.exports = router;