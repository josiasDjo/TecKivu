const Categories = requrie('../models/Categories');

exports.createCategory = async (req, res) => {
    try {
        const { category_name, description } = req.body;
        const categoryExist = await Categories.findOne({where: { category_name }});
        if (categoryExist) return res.json({ success: false, message: 'Cette catégorie existe déjà'});

        const newCategory = await Categories.create({ category_name, description });
        console.log('Nouvelle catégorie : ', newCategory);
    } catch (err) {
        console.log(`Une erreur s'est produite : ${err}`);
        return res.json({ success: false, message: 'Une erreur s\'est produite'});
    }
}