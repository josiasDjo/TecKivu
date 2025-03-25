const Orders = require('../models/Orders');

exports.addOrder = async (req, res) => {
    try {
        const { user_id,order_status,total_amount,shipping_address,billing_adsress,payment_method } = req.body;
    } catch(err) {
        console.log('Une erreur s\'est produite : ', err);
        return res.json({ success: false, message: 'Une erreur s\'est produite'});
    }
}