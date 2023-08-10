const mongoose = require('mongoose');
const User = require('../../models/user');
const user = require('../../models/user');

let activePage = '/login'
const roles =  ['admin', 'manager', 'staff', 'user'];


exports.registrationForm = (req, res) => {
    activePage = '/register'
    res.render('pages/login/registrationForm', {activePage, roles});
}

// Register a User
exports.registerUser = async (req, res) => {
    try {
        const {email, firstName, lastName, username, password, role} = req.body;

        const user = new User({email, username, firstName, lastName, role});
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
    res.render('pages/login/login', {activePage})
}

exports.userLogin = async (req, res) => {
    const userFirstName = req.user.firstName;
    const upperCasedName= userFirstName.charAt(0).toUpperCase() + userFirstName.slice(1).toLowerCase();

    req.flash('success', `Welcome back, ${upperCasedName}! `);
    res.redirect('/');
}


exports.logout = (req,res,next) =>{
  req.logout(function(err){
          if(err){
              return next(err);
          }

          req.flash('success','You are now logged out')
          res.redirect('/login')
  })
}

