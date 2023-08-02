const express = require('express');
const router = express.Router();
const { viewLeaveManagement, leaveForm, addLeave, viewLeave, updateLeaveForm, updateLeave, deleteLeave } = require('../controller/leaveController');

router.get('/leave-management', viewLeaveManagement);
router.get('/leave-management/new-leave-request', leaveForm);
router.post('/leave-management', addLeave);
router.get('/leave-management/:id', viewLeave);
router.get('/leave-management/:id/update-leave-form', updateLeaveForm);
router.patch('/leave-management/:id', updateLeave);
router.delete('/leave-management/:id', deleteLeave)

module.exports = router;