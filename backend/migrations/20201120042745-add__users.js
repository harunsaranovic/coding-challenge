'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('users', [
			{
				email: 'harun.saranovic@gmail.com',
				password: 'password',
				firstName: 'Harun',
				lastName: 'Saranovic'
			},
			{
				email: 'test@email.com',
				password: 'password',
				firstName: 'Test',
				lastName: 'User'
			}
		]);
	},

	down: async (queryInterface, Sequelize) => {
		/**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
	}
};
