const ProductCard = require('../models/productsCard');

exports.getAllProducts = async (req, res) => {
    try {
        const AllProducts = await ProductCard.findAll();
        if (!AllProducts) return { success: false, AllProduct: 'Aucun élément trouver'};
        return { success: true, AllProduct: AllProducts };
    } catch (err) {
        console.log('Une erreur s\'est produite : ', err);
        return res.json({ success: false, success: 'Une erreur s\'est produite '});
    }
}
