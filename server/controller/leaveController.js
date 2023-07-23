const mongoose = require('mongoose');

const activePage = '/leave-management'

exports.viewLeaveManagement = async (req, res) => {
    res.render('pages/leaveManagement', {activePage});
}

exports.leaveForm = async (req, res) => {
    res.render('pages/newLeaveForm', {activePage});
}