const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const userController = require('../controllers/userController');

router.post('/register', userController.createUser);
router.get('/', profileController.getAllProfiles);
router.post('/', profileController.createProfile);
router.post('/login', userController.loginUser);

module.exports = router;
