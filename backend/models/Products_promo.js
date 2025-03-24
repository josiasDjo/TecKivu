const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const product = require('./Products');
const promo = require('./Promotions');

const Product_promo = sequelize.define('', {
    product_promo_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    product_id: { type: DataTypes.INTEGER, allowNull: false },
    promo_id: { type: DataTypes.INTEGER, allowNull: false }
}, {
    timestamp: true
});

Product_promo.HasMany(product, { foreignKey: 'product_id'});
Product_promo.BelongsTo(promo, { foreignKey: 'promo_id'});
product.BelongsTo(Product_promo, { foreignKey: 'product_id'});
promo.HasMany(Product_promo, { foreignKey: 'promo_id'});

module.exports = Product_promo;