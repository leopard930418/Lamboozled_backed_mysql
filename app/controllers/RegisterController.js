const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const validator = require('validator');

// const History = require('../models/History');
const Register = require('../models/Register');

exports.inGame = (req, res, next) => {
	Register.create({
		name:req.body.name,
		regist_date: new Date(),
	}).then(data => {
		console.log(data.dataValues)
		res.send(data.dataValues);
	});
}

exports.readRegisters = (req, res, next) => {
	Register.findAll().then(data=>{
		res.send(data);
	});
	
}
