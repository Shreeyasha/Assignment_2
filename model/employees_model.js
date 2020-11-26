const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const employeesSchema = new Schema({
    id: {type: String},
    employees_name: {type: String},
    employees_salary: {type: String},
    employees_age: {type: String},
    profile_image: {type:String},
});

module.exports = mongoose.model('Employees', employeesSchema);