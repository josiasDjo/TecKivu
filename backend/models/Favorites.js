const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const User = require('./Users');
const Product = require('./Products');

const Favorite = sequelize.define('table_favorites', {
    favorite_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    product_id: { type: DataTypes.INTEGER, allowNull: false },
    user_id: { type: DataTypes.INTEGER, allowNull: false }
}, {
    timestamp: true
});

User.HasMany(Favorite, { foreignKey: 'user_id'});
Product.HasMany(Favorite, { foreignKey: 'product_id'});
Favorite.BelongsTo(User, { foreignKey: 'user_id' });
Favorite.BelongsTo(Product, { foreignKey: 'product_id'});

module.exports = Favorite;