const express = require("express");
const router = express.Router();
const ExpressError = require('../../utils/ExpressError');
const { employeeSchemaValidation } = require("../../schemas");
const { viewAllEmployees, employeesForm, addEmployee, viewEmployee, viewLeaveHistory, updateEmployeeForm, updateEmployee, deleteEmployee, deactivateEmployee, activateEmployee} = require("../controller/employeeController");
const employee = require("../../models/employee");
const {isLoggedIn} = require('../../middlewares');

const employeeValidate = (req, res, next) => {
    const {error} = employeeSchemaValidation.validate(req.body)
    if(error){
       const msg = error.details.map(el=> el.message).join(',');
       throw new ExpressError(msg,400);
    }else{
      next();
    }
}

const isAccessible = async (req, res, next) => {
  const id = req.params.id
  const employeeAccess = await employee.findById(id, {isAccessibleBy: 'Manager'})

  if( !employeeAccess.isAccesibleBy.equals(req.user.role)) {
    res.redirect('/')
    req.flash('')
  }
  next();
}

router.get('/employees',isLoggedIn, viewAllEmployees);
router.get('/employees/form',isLoggedIn, employeesForm);
router.post('/employees',isLoggedIn, employeeValidate, addEmployee);
router.get('/employees/:id',isLoggedIn, viewEmployee);

router.get('/employees/:id/leave-history',isLoggedIn, viewLeaveHistory);

router.get('/employees/:id/update-employee-form',isLoggedIn, updateEmployeeForm);
router.patch('/employees/:id/update',isLoggedIn,employeeValidate, updateEmployee);
router.delete('/employees/:id',isLoggedIn, deleteEmployee);
router.patch('/employees/:id/deactivate',isLoggedIn, deactivateEmployee);
router.patch('/employees/:id/activate',isLoggedIn, activateEmployee);

module.exports = router