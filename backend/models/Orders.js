const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const User = require('./Users');

const Order = sequelize.define('table_orders', {
    order_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    order_status: { type: DataTypes.STRING, allowNull: false },
    total_amount: { type: DataTypes.DECIMAL, allowNull: false },
    shipping_address: { type: DataTypes.STRING, allowNull: false },
    billing_adsress: { type: DataTypes.STRING, allowNull: false },
    payment_method: { type: DataTypes.STRING, allowNull: false }
}, {
    timestamp: true
});

User.hasMany(Order, { foreignKey: 'user_id'});
Order.belongsTo(User, { foreignKey: 'user_id'});

module.exports = Order;