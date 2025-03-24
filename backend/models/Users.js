const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const User = sequelize.define('table_users', {
    user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password_user: { type: DataTypes.STRING, allowNull: false },
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, allowNull: false },
}, {
    timestamp: true
});

module.exports = User;