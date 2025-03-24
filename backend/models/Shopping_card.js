const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const User = require('./Users');

const Shopping_card = sequelize.define('table_shopping_card', {
    shoppingCard_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    product_name: { type: DataTypes.STRING, allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
    price: { type: DataTypes.DECIMAL, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: false }
}, {
    timestamp: true
});

Shopping_card.belongsTo(User, { foreignKey: 'user_id'});
User.hasMany(Shopping_card, { foreignKey: 'user_id'});

module.exports = Shopping_card;