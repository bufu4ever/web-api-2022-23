const router = require('express').Router();
const UserController = require('../controllers/user');

router.post("/register",UserController.Register);

router.post("/login",UserController.Login);

module.exports = router;