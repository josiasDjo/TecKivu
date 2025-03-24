const express = require('express');
const router = express.Router();
const ProduitController = require('../controllers/productsController');

router.post('/new-product', ProduitController.addProduct);
router.get('/', ProduitController.getAllProducts);
router.put('/modify-product', ProduitController.modifyProducts);
router.delete('/delete-product', ProduitController.deleteProducts);

module.exports = router;