const mongoose = require('mongoose');
const catchAsync = require('../../utils/catchAsync');

const activePage = '/leave-management'

exports.viewLeaveManagement = async (req, res) => {
    res.render('pages/leaveManagement', {activePage});
}

exports.leaveForm = async (req, res) => {
    res.render('pages/newLeaveForm', {activePage});
}