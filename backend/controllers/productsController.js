const Products = requrie('../models/Products.js');

exports.addProduct = async (req, res) => {
    try {
        const { category_id,product_name,description,price,stock,image } = req.body;
        
    } catch (err) {
        console.log('Une erreur s\'est produite : ', err);
        return res.json({ success: false, message: 'Une erreur s\'est produite'});
    }
}