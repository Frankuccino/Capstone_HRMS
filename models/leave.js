const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeaveSchema = new Schema({ 
    employeeId: String,
    firstName: String, 
    lastName: String,
    leaveStart: String,
    leaveEnd: String,
    remarks: String,
    status : {
        type: String , 
        default: 'pending',
    },
    leaveType: {
        type: String
    }
    // ['pending', 'approved', 'not approved']

})

module.exports = mongoose.model('Leave', LeaveSchema);
