const Sequelize = require('sequelize');

module.exports = sequelize.define(
	'User',
	{
		id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		email: Sequelize.STRING(100),
		firstName: {
			type: Sequelize.STRING(100) 
		},
		lastName: {
			type: Sequelize.STRING(100) 
		},
		password: Sequelize.STRING(360)
	},
	{
		timestamps: false
	}
);
