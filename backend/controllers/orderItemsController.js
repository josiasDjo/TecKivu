const Orders_items = require('../models/Orders_items');

exports.addOrdersItems = async (req, res) => {
    try {
        const { order_id,product_id,quantity,unit_price } = req.body;
        const orderItemExist = await Orders_items.findOne({ where: {order_id, product_id}});
        if(orderItemExist) return res.json({ success: false, message: 'Le produit existe déjà dans la commande'});
        await Orders_items.create({ order_id,product_id,quantity,unit_price });
        return res.json({ success: true, message: 'Produit ajouté à la commande'});
    } catch(err) {
        console.log('Une erreur s\'est produite : ', err);
        return res.json({ success: false, message: 'Une erreur s\'est produite'});
    }   
}

exports.getOrdersItems = async (req,res) => {
    try {
        
    } catch(err) {
        console.log('Une erreur s\'est produite : ', err);
        return res.json({ success: false, message: 'Une erreur s\'est produite'});
    }
}