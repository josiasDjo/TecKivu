const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const product = require('./Products');
const promo = require('./Promotions');

const Product_promo = sequelize.define('table_product_promo', {
    product_promo_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    product_id: { type: DataTypes.INTEGER, allowNull: false },
    promo_id: { type: DataTypes.INTEGER, allowNull: false }
}, {
    timestamp: true
});

Product_promo.hasMany(product, { foreignKey: 'product_id'});
Product_promo.belongsTo(promo, { foreignKey: 'promo_id'});
product.belongsTo(Product_promo, { foreignKey: 'product_id'});
promo.hasMany(Product_promo, { foreignKey: 'promo_id'});

module.exports = Product_promo;