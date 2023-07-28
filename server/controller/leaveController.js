const mongoose = require('mongoose');
const catchAsync = require('../../utils/catchAsync');
const Employee = require('../../models/employee');
const Leave = require('../../models/leave');

const activePage = '/leave-management'

exports.viewLeaveManagement = async (req, res) => {
    const leaves = await Leave.find({})
    
    res.render('pages/leaveManagement', {activePage, leaves});
}

exports.leaveForm = async (req, res) => {
    const employeeIds = await Employee.find({}, 'employeeId firstName lastName');
    res.render('pages/newLeaveForm', {activePage, employeeIds});
}

// Add leave to the employee
exports.addLeave = async (req, res) => {
    const employeeId = req.body.leave.employeeId;
    const employee = await Employee.findOne({employeeId: employeeId});
    const leave = new Leave(req.body.leave);
    employee.leaves.push(leave);
    await leave.save();
    await employee.save();
    res.redirect('/leave-management'); 
}