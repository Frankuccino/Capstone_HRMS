const Joi = require('joi');

module.exports.employeeSchemaValidation = Joi.object({
    employee: Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        age: Joi.number().integer().min(18).required(),
        street: Joi.string().required(),
        barangay: Joi.string().required(),
        city: Joi.string().required(),
        province: Joi.string().required(),
        postalCode: Joi.number().required(),
        phoneNumber: Joi.number().required(),
        phoneNumber2: Joi.number().allow('').optional(),
        emergContactPer: Joi.string().required(),
        contactNumber: Joi.number().required(),
        employeeId: Joi.string().required(),
        email: Joi.string().email().required(),
        office: Joi.string().required(),
        position: Joi.string().required(),
        sssId: Joi.string().allow('').optional(), 
        gsisId: Joi.string().allow('').optional(), 
        philHealthId: Joi.string().allow('').optional(), 
        pagibigId: Joi.string().allow('').optional(),
        tinId: Joi.string().allow('').optional(), 
        designation: Joi.string(),
        dateStart: Joi.string(),
        createdAt: Joi.date().default(Date.now())
    }).required()
})