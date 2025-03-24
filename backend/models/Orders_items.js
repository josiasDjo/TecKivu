const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Order = require('./Orders');
const product = require('./Products');

const Order_items = sequelize.define('', {
    order_item_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    order_id: { type: DataTypes.INTEGER, allowNull: false },
    product_id: { type: DataTypes.INTEGER, allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
    unit_price: { type: DataTypes.DECIMAL, allowNull: false }
}, {
    timestamp: true
});

Order_items.belongsTo(Order, { foreignKey: 'order_id'});
Order.HasMany(Order_items, { foreignKey: 'order_id'});
product.belongsTo(Order_items, { foreignKey: 'product_id'});
Order_items.HasMany(product, { foreignKey: 'product_id'});

module.exports = Order_items;