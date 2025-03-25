const Order = require('../models/Orders');

exports.addOrder = async (req, res) => {
    try {
        const { user_id,order_status,total_amount,shipping_address,billing_adsress,payment_method } = req.body;
        const newOrder = await Order.create({ user_id,order_status,total_amount,shipping_address,billing_adsress,payment_method });
        return res.json({ success: true, message: 'Commande envoyée'});
    } catch(err) {
        console.log('Une erreur s\'est produite : ', err);
        return res.json({ success: false, message: 'Une erreur s\'est produite'});
    }
}

exports.getAllOrders = async (req, res) => {
    try {
        const AllOrders = await Order.findAll();
        if (!AllOrders) return { success: false, message: 'Pas de commande pour l\'instant'}
        return { success: true, orders: AllOrders};
    } catch(err) {
        console.log('Une erreur s\'est produite : ', err);
        return res.json({ success: false, message: 'Une erreur s\'est produite'});
    }
}

exports.updateOrder = async (req, res) => {
    try {
        const { order_id,user_id,order_status,total_amount,shipping_address,billing_adsress,payment_method} = req.body;
        const orderExist = await Order.findByPk(order_id);
        if (!orderExist) return res.json({ success: false, message: 'Commande introuvable, veillez réessayer'});

    } catch (err) {
        console.log('Une erreur s\'est produite : ',  err);
        return res.json({ success: false, message: 'Une erreur s\'est produite'});
    }
}