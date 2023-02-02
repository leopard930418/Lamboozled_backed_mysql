const bcrypt = require('bcryptjs');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Register = sequelize.define('registers', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true
		},
		name: DataTypes.STRING,
		regist_date: {
			type: DataTypes.DATE,
			allowNull:true
		}
  	},
	);

module.exports = Register;