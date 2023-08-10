const express = require("express");
const router = express.Router();
const ExpressError = require('../../utils/ExpressError');
const { employeeSchemaValidation } = require("../../schemas");
const { viewAllEmployees, employeesForm, addEmployee, viewEmployee, viewLeaveHistory, updateEmployeeForm, updateEmployee, deleteEmployee, deactivateEmployee, activateEmployee} = require("../controller/employeeController");
const employee = require("../../models/employee");
const {isLoggedIn, isAccessible, employeeValidate, isAccessibleByAdminOnly} = require('../../middlewares');

router.get('/employees', isLoggedIn, viewAllEmployees);
router.get('/employees/form', isLoggedIn, employeesForm);
router.post('/employees', isLoggedIn, employeeValidate, addEmployee);
router.get('/employees/:id', isLoggedIn, viewEmployee);
router.get('/employees/:id/leave-history', isLoggedIn, viewLeaveHistory);
router.get('/employees/:id/update-employee-form', isLoggedIn, updateEmployeeForm);
router.patch('/employees/:id/update',isLoggedIn, employeeValidate, updateEmployee);
router.delete('/employees/:id', isLoggedIn, isAccessibleByAdminOnly, deleteEmployee);
router.patch('/employees/:id/deactivate', isLoggedIn, isAccessible, deactivateEmployee);
router.patch('/employees/:id/activate', isLoggedIn, isAccessible, activateEmployee);

module.exports = router