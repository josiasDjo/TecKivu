const express = require('express');
const router = express.Router();
const categorieController = require('../controllers/categoriesController');

router.post('/', categorieController.createCategory);
router.get('/', categorieController.getAllCategories);
router.put('/', categorieController.modifyCategory);
router.delete('/', categorieController.deleteCategory);

module.exports = router;