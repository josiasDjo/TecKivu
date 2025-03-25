const express = require('express');
const router = express.Router();
const OrderItemsController = require('../controllers/orderItemsController');

router.post('/add-items', OrderItemsController.addOrdersItems);
router.get('/', OrderItemsController.getOrdersItems);

module.exports = router;