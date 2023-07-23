const express = require('express');
const router = express.Router();


app.get('/leave-management', (req, res) => {
    res.render('pages/leaveManagement');
});

app.get('/leave-management/new-leave-request', (req, res) => {
    res.render('pages/newLeaveForm');
});
