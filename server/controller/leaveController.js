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

// View Specific Leave
exports.viewLeave = catchAsync(async (req, res) => {
    const id = req.params.id;
    const leaver = await Leave.findById(id);
    res.render('pages/leave-info', {activePage, leaver})
})


// View Update Leave Form 
exports.updateLeaveForm = async (req, res) => { 
    const leaveTypes = ['Sick Leave', 'Vacation Leave'] 
    const id = req.params.id 
    const leave = await Leave.findById(id); 
    res.render('pages/leave-edit', {leave, activePage, leaveTypes}); 
} 
 
// Update Leave Form 
exports.updateLeave = async (req, res) => { 
    const id = req.params.id; 
    const leaveUpdate = await Leave.findByIdAndUpdate(id, {...req.body.leave}) 
    res.redirect('/leave-management'); 
} 

// Delete Specific Leave 
exports.deleteLeave = async (req, res) => { 
    const id = req.params.id; 
    const leave = await Leave.findById(id); 
    await Leave.findByIdAndDelete(id);
    res.redirect('/leave-management') 
} 