const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.post('/signup', usersController.createUser);
router.get('/signin', usersController.getUser);
router.put('/update-user', usersController.updateUser);
router.delete('/delete', usersController.deleteUser);


module.exports = router;
