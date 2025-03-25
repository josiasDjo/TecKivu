const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController');

router.post('/add-order', ordersController.addOrder);
router.get('/get/my-orders', ordersController.getMyOrders);
router.put('/update/order', ordersController.updateOrder);

module.exports = router;