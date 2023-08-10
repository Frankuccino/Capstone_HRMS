const User = require('./models/user');

module.exports.isLoggedIn = (req,res,next) =>{
    req.session.returnTo = req.originalUrl;
    if(!req.isAuthenticated()){
        req.flash('error','You must ne logged in');
        return res.redirect('/login');
    }
    next();
}


