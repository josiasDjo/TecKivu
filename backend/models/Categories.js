const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Category = sequelize.define('table_categories', {
    category_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    category_name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    parent_category: { type: DataTypes.STRING, allowNull: false }
}, {
    timestamp: true
});

module.exports = Category;