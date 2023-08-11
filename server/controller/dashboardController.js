const mongoose = require('mongoose');
const catchAsync = require('../../utils/catchAsync');

// Models
const Employee = require('../../models/employee');
const Applicant = require('../../models/applicant');

const activePage = '/';

exports.viewDashboard = async (req, res) => {
    const employeeCount = await Employee.countDocuments({});
    const jobOrderCount = await Employee.countDocuments({position: 'Job Order'})
    const casualCount = await Employee.countDocuments({position: 'Casual'})
    const regularCount = await Employee.countDocuments({position: 'Regular'})
    const applicantCount = await Applicant.countDocuments({})
 

    res.render('pages/dashboard/dashboard', {activePage, employeeCount, jobOrderCount, casualCount, regularCount, applicantCount});
}

exports.test = async (req, res) => {
    res.render('pages/dashboard/test');
}