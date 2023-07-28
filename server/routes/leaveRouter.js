const express = require('express');
const router = express.Router();
const { viewLeaveManagement, leaveForm, addLeave } = require('../controller/leaveController');

router.get('/leave-management', viewLeaveManagement);
router.get('/leave-management/new-leave-request', leaveForm);
router.post('/leave-management', addLeave);

module.exports = router;