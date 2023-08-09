const mongoose = require('mongoose');
const User = require('../../models/user');

let activePage = '/login'

exports.registrationForm = (req, res) => {
    activePage = '/register'
    res.render('pages/user/registrationForm', {activePage});
}

// Register a User
exports.registerUser = async (req, res) => {
    try {
        const {email, firstName, lastName, username, password} = req.body;

        const user = new User({email, username, firstName, lastName});
        const registeredUser = await User.register(user, password);

        req.login(registeredUser, function(err) {
          if(err) {
            return next(err);
          }
            req.flash('success', 'Welcome to HRMS!');
            res.redirect('/');
        })
      } catch(e) {
        req.flash('error', e.message);
        res.redirect('/register');
      }
}

exports.viewLogin = async (req, res) => {
    res.render('pages/user/login', {activePage})
}

exports.userLogin = async (req, res) => {
    req.flash('success', 'Welcome back!');
    res.redirect('/');
}

