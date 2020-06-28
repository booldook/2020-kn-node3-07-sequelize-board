module.exports = (sequelize, Sequelize) => {
	return sequelize.define('Tag', {
		tag: {
			type: Sequelize.STRING(255),
			allowNull: false,
			unique: true
		}
	}, {
		tableName: "tags",
		charset: "utf8",
		timestamps: true
	});
}