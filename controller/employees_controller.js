const mongoose = require('mongoose');
const Employees = mongoose.model('Employees');
const fetch = require('node-fetch');

exports.get_api_data = async function(req, res){
    try{
        let api_data_response = await fetch("http://dummy.restapiexample.com/api/v1/employees");
    if (api_data_response.ok) { 
        let employee_json = await api_data_response.json();
        res.status(200).json(employee_json);
      } else {
        console.log("HTTP-Error: " + api_data_response.status);
      }
    }catch(e){
        console.log('Error is:');
        console.log(e);
    }
}

exports.get = async function(req, res){
    const employees = await Employees.find({});
    return res.status(200).json(employees);

}

exports.create =  async function(req, res){
    let {id, employees_name, employees_salary, employees_age, profile_image} = req.body
    let emp = new Employees();
    emp.id = id;
    emp.employees_name = employees_name;
    emp.employees_age = employees_age;
    emp.employees_salary = employees_salary;
    emp.profile_image = profile_image;
    await emp.save();
    return res.status(201).json(emp);
}

exports.update = async function(req, res){
    let {id, employees_name, employees_salary, employees_age, profile_image} = req.body
    let emp = await Employees.findById(req.params.id);
    if(!emp){
        return res.status(204).json({'error': 'Data not found'});
    }else{
        emp.id = id;
    emp.employees_name = employees_name;
    emp.employees_age = employees_age;
    emp.employees_salary = employees_salary;
    emp.profile_image = profile_image;
    await emp.save();
    return res.status(200).json(emp);
    }
}

exports.destroy = async function(req, res){
    let emp = await Employees.findById(req.params.id);
    if(!emp){
        return res.status(204).json({'error': 'Data not found'});
    }else{
        await emp.remove();
        return res.status(204).json(emp);
    }
}

exports.getById = async function(req, res){
    let emp = await Employees.findById(req.params.id);
    return res.status(200).json(emp);
}