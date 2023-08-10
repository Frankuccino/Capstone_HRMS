const express = require('express');
const router = express.Router();
const passport = require('passport');
const {isLoggedIn} = require('../../middlewares');
const {registrationForm, registerUser, viewLogin, userLogin,logout} = require('../controller/usersController');


router.get('/register',isLoggedIn, registrationForm);
router.post('/register', isLoggedIn,registerUser);

router.get('/login', viewLogin)
router.post('/login', passport.authenticate('local', {failureFlash: true, failureRedirect: '/user/login'}), userLogin);
router.post('/logout',logout);

module.exports = router;