const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Product = require('./Products');
const User = require('./Users');

const Review = sequelize.define('table_reviews', {
    review_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    product_id: { type: DataTypes.INTEGER, allowNull: false },
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    rating: { type: DataTypes.INTEGER, allowNull: false },
    comment_user: { type: DataTypes.TEXT, allowNull: true }
}, {
    timestamp: true
});

User.hasMany(Review, { foreignKey: 'user_id'});
Product.hasMany(Review, { foreignKey: 'product_id'});
Review.belongsTo(User, { foreignKey: 'user_id' });
Review.belongsTo(Product, { foreignKey: 'product_id'});

module.exports = Review;