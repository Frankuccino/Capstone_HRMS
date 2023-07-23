const mongoose = require('mongoose');

exports.viewLeaveManagement = async (req, res) => {
    res.render('pages/leaveManagement');
}

exports.leaveForm = async (req, res) => {
    res.render('pages/newLeaveForm');
}