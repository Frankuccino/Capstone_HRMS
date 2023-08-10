const express = require('express');
const router = express.Router();
const passport = require('passport');
const {isLoggedIn, storeReturnTo, isAccessible, isAccessibleByAdminOnly} = require('../../middlewares');
const {registrationForm, registerUser, viewLogin, userLogin,logout} = require('../controller/usersController');


router.get('/register', isLoggedIn, isAccessible, registrationForm);
router.post('/register', isLoggedIn, isAccessibleByAdminOnly, registerUser);

router.get('/login', viewLogin)
router.post('/login', storeReturnTo, passport.authenticate('local', {failureFlash: true, failureRedirect: '/login'}), userLogin);
router.post('/logout', logout);

module.exports = router;