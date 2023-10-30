// Import important Sequelize parts
const { Model, DataTypes } = require('sequelize');
// Import database connection
const sequelize = require('../config/connection.js');

class Category extends Model {}

// Define table columns and configuration
Category.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},

		category_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'category',
	}
);

module.exports = Category;
