const Products = requrie('../models/Products.js');

exports.addProduct = async (req, res) => {
    try {
        const { category_id,product_name,description,price,stock,image } = req.body;
        const productExist = await Products.findOne({ where: { product_name, price }});
        if (productExist) return res.json({ success: false, message: 'Ce produit existe déjà, cliquez sur le button modifier pour le modifier'});

        const newProduct = await Products.create({ category_id,product_name,description,price,stock,image });
        console.log(newProduct);
        return res.json({ success: true, message: 'Nouveau produit ajouté avec succès'});
    } catch (err) {
        console.log('Une erreur s\'est produite : ', err);
        return res.json({ success: false, message: 'Une erreur s\'est produite'});
    }
}