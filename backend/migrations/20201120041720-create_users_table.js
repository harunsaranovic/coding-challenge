'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.createTable('users', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			email: Sequelize.STRING(100),
			firstName: {
				type: Sequelize.STRING(100),
				allowNull: false
			},
			lastName: {
				type: Sequelize.STRING(100),
				allowNull: false
			},
			password: Sequelize.STRING(360)
		});
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.dropTable('users');
	}
};
