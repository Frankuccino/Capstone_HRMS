const express = require('express');
const router = express.Router();
const ExpressError = require('../../utils/ExpressError');
const {leaveSchemaValidation} = require('../../schemas');
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

router.get('/leave-management', viewLeaveManagement);
router.get('/leave-management/:id/new-leave-request', leaveForm);

router.post('/leave-management/:id',leaveValidate, addLeave);

router.get('/leave-management/:id', viewLeave);
router.get('/leave-management/:id/update-leave-form', updateLeaveForm);
router.patch('/leave-management/:id', updateLeave);
router.delete('/leave-management/:id', deleteLeave)

module.exports = router;