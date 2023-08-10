const express = require('express');
const router = express.Router();
const { viewDashboard, test } = require('../controller/dashboardController');
const {isLoggedIn} = require('../../middlewares');

router.get('/', isLoggedIn, viewDashboard);
router.get('/test', test)

module.exports = router;