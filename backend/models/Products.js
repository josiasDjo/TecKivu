const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const category = require('./Categories');

const Product = sequelize.define('table_products', {
    product_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    category_id: { type: DataTypes.INTEGER, allowNull: false },
    product_name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.DECIMAL, allowNull: false },
    stock: { type: DataTypes.INTEGER, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: false }, 
}, {
    timestamp: true
});

Product.BelongsTo(category, { foreignKey: 'category_id'});
category.hasMany(Product, { foreignKey: 'category_id'});

module.exports = Product;