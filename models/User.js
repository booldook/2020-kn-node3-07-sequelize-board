module.exports = (sequelize, Sequelize) => {
	return sequelize.define('User', {
		userid: {
			type: Sequelize.STRING(16),
			allowNull: false,
			unique: true
		},
		userpw: {
			type: Sequelize.STRING(255),
			allowNull: false
		},
		username: {
			type: Sequelize.STRING(50),
			allowNull: false
		},
		email: {
			type: Sequelize.STRING(255)
		}
	}, {
		timestamps: true,
		charset: 'utf8',
		tableName: 'sequser'
	});
}