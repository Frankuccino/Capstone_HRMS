const express = require("express");
const app =  express();
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const ExpressError = require('./utils/ExpressError');

//user Routers
app.engine('ejs', ejsMate);

const dashboardRouter = require('./server/routes/dashboardRouter');
const usersRouters = require('./server/routes/usersRouters');
const employeesRouters = require('./server/routes/employeesRouters');
const transactionRouters = require('./server/routes/transactionRouters');
const leaveRouters = require('./server/routes/leaveRouter');

app.set('views', path.join(__dirname,'./client/views'));
app.set('view engine', 'ejs');

// Parse form data
app.use(express.urlencoded({extended:true}))

// Set static files
app.use(express.static('public'));

//Configure Method override
app.use(methodOverride('_method'));


app.use('', dashboardRouter)
app.use('', employeesRouters)
app.use('', leaveRouters)
app.use('', transactionRouters)
app.use('', usersRouters)

app.use('*',(req, res, next)=>{
    next(new ExpressError('Page not found Error BOI!', 404));
})

const activePage = '';
// Error Handler Middleware
app.use((err, req, res, next) => {
    const {statusCode = 500} = err;
    if(!err.message) err.message = "Something went wrong!";
    res.status(statusCode).render('error', {err, activePage});
})

app.listen(5000,() => {
    console.log("Server running in port 5000");
})