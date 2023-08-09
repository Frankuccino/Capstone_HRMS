const express = require('express');
const router = express.Router();
const passport = require('passport');
const {registrationForm, registerUser, viewLogin, userLogin} = require('../controller/usersController');


router.get('/register', registrationForm);
router.post('/register', registerUser);

router.get('/login', viewLogin)
router.post('/login', passport.authenticate('local', {failureFlash: true, failureRedirect: '/user/login'}), userLogin);

module.exports = router;