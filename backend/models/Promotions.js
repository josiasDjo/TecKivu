const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Promotion = sequelize.define('', {
    promo_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    promo_name: { type: DataTypes.INTEGER, allowNull: false },
    dicount_percentage: { type: DataTypes.DECIMAL, allowNull: false },
    start_date: { type: DataTypes.DATE, allowNull: false },
    end_date: { type: DataTypes.DATE, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: true }
}, {
    timestamp: true
});

module.exports = Promotion;