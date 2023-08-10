const {leaveSchemaValidation, employeeSchemaValidation} = require('./schemas');

module.exports.isLoggedIn = (req, res, next) =>{
    req.session.returnTo = req.originalUrl;
    if(!req.isAuthenticated()) {
        req.flash('error','You must be logged in');
        return res.redirect('/login');
    }
    next();
}

module.exports.storeReturnTo = (req, res, next) => {
    if(req.session.returnTo){
        res.locals.returnTo = req.session.returnTo;
    }
    next();
}

module.exports.leaveValidate = (req, res, next) => {
    const {error} = leaveSchemaValidation.validate(req.body);
    if(error){
       const msg = error.details.map(el=> el.message).join(',');
    //    throw new ExpressError(msg,400);
         req.flash('error', `${msg}`);
         res.redirect(`${req.originalUrl}/new-leave-request`);
    }else{
      next();
    }
}

// Employee Form Validation
module.exports.employeeValidate = (req, res, next) => {
    const {id} = req.params;
    const {error} = employeeSchemaValidation.validate(req.body)
    if(error){
       const msg = error.details.map(el=> el.message).join(',');
    //    throw new ExpressError(msg,400);
        req.flash('error', `${msg}`);
        if(id){
            res.redirect(`update-employee-form`);
        } else {
            res.redirect(`employees/form`);
        }
    }else{
      next();
    }
}

// Accessibility
module.exports.isAccessible = async (req, res, next) => {
    const {id} = req.params;
    const currentUserAccess = req.user;
    const accessibleBy = currentUserAccess.role === 'admin' || currentUserAccess.role === 'manager';
    if(!accessibleBy) {
      req.flash('error', 'You do not have permission to perform this action!');
      res.redirect(`/employees/${id}`)
    } else {
      next();
    }
  }

// Route protection for admin and manager excluding staffs
  module.exports.isAuthorizedBy = async (req, res, next) => {
    const currentUserAccess = req.user;
    const accessibleBy = currentUserAccess.role === 'admin' || currentUserAccess.role === 'manager';
    if(!accessibleBy) {
      req.flash('error', 'You are not authorized to go there!');
      res.redirect(`/`)
    } else {
      next();
    }
  }

// Middleware for admin access only
  module.exports.isAccessibleByAdminOnly = async (req, res, next) => {
    const currentUserAccess = req.user;
    const accessibleBy = currentUserAccess.role === 'admin';
    if(! accessibleBy) {
      req.flash('error', 'Admin actions only!');
      res.redirect(`/`)
    } else {
      next();
    }
  }