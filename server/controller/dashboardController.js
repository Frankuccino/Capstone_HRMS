const mongoose = require('mongoose');

const activePage = '/';

exports.viewDashboard = async (req, res) => {
    res.render('pages/dashboard', {activePage});
}