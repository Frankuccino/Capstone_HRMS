const express = require('express');
const router = express.Router();
const ExpressError = require('../../utils/ExpressError');
const {leaveSchemaValidation} = require('../../schemas');
const {isLoggedIn} = require('../../middlewares');
const { viewLeaveManagement, leaveForm, addLeave, viewLeave, updateLeaveForm, updateLeave, deleteLeave } = require('../controller/leaveController');

const leaveValidate = (req, res, next) => {
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

router.get('/leave-management',isLoggedIn, viewLeaveManagement);
router.get('/leave-management/:id/new-leave-request',isLoggedIn, leaveForm);

router.post('/leave-management/:id',isLoggedIn,leaveValidate, addLeave);

router.get('/leave-management/:id',isLoggedIn, viewLeave);
router.get('/leave-management/:id/update-leave-form', updateLeaveForm);
router.patch('/leave-management/:id',isLoggedIn, updateLeave);
router.delete('/leave-management/:id',isLoggedIn, deleteLeave)

module.exports = router;