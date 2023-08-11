const mongoose = require('mongoose');
const catchAsync = require('../../utils/catchAsync');

// Models
const Employee = require('../../models/employee');

const activePage = '/';

exports.viewDashboard = async (req, res) => {
    const employeeCount = await Employee.countDocuments({});
    

    res.render('pages/dashboard/dashboard', {activePage, employeeCount});
}

exports.test = async (req, res) => {
    res.render('pages/dashboard/test');
}