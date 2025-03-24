const sequelize = require('./index');
const { DataTypes } = require('sequelize');

const ProductCard = sequelize.define('product_card', {
    product_id: { type: DataTypes.INTEGER },
    product_name: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT },
    price: { type: DataTypes.DECIMAL },
    stock: { type: DataTypes.INTEGER },
    image: { type: DataTypes.STRING },
    category_name: { type: DataTypes.STRING },
    dicount_percentage: { type: DataTypes.DECIMAL },
    average_rating: { type: DataTypes.DECIMAL }
}, {
    tableName: 'product_card',
    timestamps: false,
    freezeTableName: true
})

module.exports = ProductCard;