const express = require('express');
const router = express.Router();
const { viewLeaveManagement, leaveForm } = require('../controller/leaveController');

router.get('/leave-management', viewLeaveManagement);
router.get('/leave-management/new-leave-request', leaveForm);

module.exports = router;