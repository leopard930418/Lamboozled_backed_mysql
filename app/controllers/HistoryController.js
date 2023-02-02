const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const validator = require('validator');

const History = require('../models/History');
// const Register = require('../models/Register');

exports.saveResult = (req, res, next) => {
	History.create({
		register_id: req.body.register_id,
		day_num: req.body.day_num,
		article_index: req.body.article_index,
		result: req.body.result,
		sample: req.body.sample,
		createdAt: new Date(),
		updatedAt: new Date(),

	}).then(data=>{
		res.send(data.dataValues);
	})
}
exports.readHistorys = (req, res, next) => {
	History.findAll().then(data=>{
		res.send(data.dataValues);
	})
	
}
