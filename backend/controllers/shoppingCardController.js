const ShoppingCard = require('../models/Shopping_card');

exports.addToShoppingCard = async (req, res) => {
    try {
        const { user_id,product_name,quantity,price,image  } = req.body;
        const newItems = await ShoppingCard.create({ user_id,product_name,quantity,price,image });
        console.log('');
        return res.json({ success: true, message: 'Produit ajouté au panier'});
    } catch (err) {
        console.log('Une erreur s\'est produite : ', err);
        return res.json({ success: false, message: 'Une erreur s\'est produite'});
    }
}

exports.getShoppingCard = async (req, res) => {
    try {
        const { user_id } = req.body;
        const Shopping_Card = await ShoppingCard.findAll({ where: { user_id: user_id}});
        if (!Shopping_Card) return { success: false, message: 'Aucun élément pour le moment'};
        return { success: true, getShoppingCard: Shopping_Card};
    } catch (err) {
        console.log('Une erreur s\'est produite : ', err);
        return res.json({ success: false, message: 'Une erreur s\'est produite'});
    }
}

exports.removeProduct = async (req, res) => {
    try {
        const { shoppingCard_id } = req.body;
        const productExist = await ShoppingCard.findByPk(shoppingCard_id);
        if (!productExist) return res.json({ success: false, message: 'Une erreur s\'est produite : Nous n\'avons pas pu trouver le produit'});
        await ShoppingCard.destroy({ where: {shoppingCard_id}});
        return res.json({ success: true, message: 'Produit retirer du panier'});
    } catch (err) {
        console.log('Une erreur s\'est produite : ', err);
        return res.json({ success: false, message: 'Une erreur s\'est produite'});
    }
}