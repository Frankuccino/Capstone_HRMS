const express = require("express");
const router = express.Router();
const ExpressError = require('../../utils/ExpressError');
const { employeeSchemaValidation } = require("../../schemas");
const { viewAllEmployees, employeesForm, addEmployee, viewEmployee, updateEmployeeForm, updateEmployee, deleteEmployee, deactivateEmployee, activateEmployee} = require("../controller/employeeController");
const employee = require("../../models/employee");

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

router.get('/employees', viewAllEmployees);
router.get('/employees/form', employeesForm);
router.post('/employees', employeeValidate, addEmployee);
router.get('/employees/:id', viewEmployee);
router.get('/employees/:id/update-employee-form', updateEmployeeForm);
router.patch('/employees/:id/update',employeeValidate, updateEmployee);
router.delete('/employees/:id', deleteEmployee);
router.patch('/employees/:id/deactivate', deactivateEmployee);
router.patch('/employees/:id/activate', activateEmployee);

module.exports = router