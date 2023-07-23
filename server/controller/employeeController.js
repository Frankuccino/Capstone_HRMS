const mongoose =require('mongoose');
const offices = require('../../seeds/offices');
const positions = require('../../seeds/position');
const designations = require('../../seeds/designation');
const Employee = require('../../models/employee');
const Transaction = require('../../models/transaction')

// DB Connection
mongoose.connect('mongodb://127.0.0.1:27017/hrms')
.then(()=>{
    console.log('Connection Open.');
})
.catch((err)=>{
    console.log(`Error: ${err}`);
})

// View All Employees
exports.viewAllEmployees = async (req, res) => {
    const employees = await Employee.find({})
    res.render('pages/employees',{employees});
}

// View New Employee Form
exports.employeesForm = (req, res)=>{
    res.render('pages/employeeForm',{ offices, positions, designations});
}

// Add New Employee
exports.addEmployee = async (req, res)=>{
    const employee = req.body.employee;
    const newEmployee = new Employee(employee);
    await newEmployee.save();
     const addTransaction = {
         transaction: `${newEmployee.firstName} is added to the database`
     }
    const transaction =  new Transaction(addTransaction);
    await transaction.save();
    res.redirect('/employees');
}

// View Specific Employee
exports.viewEmployee= async (req, res)=>{
    const id = req.params.id;
    const employee = await Employee.findById(id);
    res.render('pages/emp-info',{employee})
}

// View Update Employee Form
exports.updateEmployeeForm = async (req, res)=>{
    const id = req.params.id;
    const employee = await Employee.findById(id);
    res.render('pages/edit',{employee, offices, positions, designations});
}

// Update Employee Form
exports.updateEmployee = async(req, res) => {
    const id = req.params.id;
    const employee = await Employee.findByIdAndUpdate(id,{...req.body.employee});
    res.redirect('/employees')
}

exports.deleteEmployee = async (req, res) => {
    const id = req.params.id;
    const employee = await Employee.findById(id);
    await Employee.findByIdAndDelete(id);
    const addTransaction = {
        transaction: `${employee.firstName} has been deleted`
    }

    const transaction =  new Transaction(addTransaction);
    await transaction.save();
    res.redirect('/employees')
}
