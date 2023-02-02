const bcrypt = require('bcryptjs');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const History = sequelize.define('historys', {
		register_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		day_num:{ 
			type:DataTypes.INTEGER,
			default:0
		},
		article_index:{ 
			type:DataTypes.INTEGER,
			default:0
		},
		result: {
			type: DataTypes.STRING,
			allowNull: false
		},
		sample: {
			type: DataTypes.STRING,
			allowNull: true
		},
		
  	},
	);

module.exports = History;