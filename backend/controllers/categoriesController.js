const Categories = requrie('../models/Categories');

exports.createCategory = async (req, res) => {
    try {
        const { category_name, description } = req.body;
        const categoryExist = await Categories.findOne({where: { category_name }});
        if (categoryExist) return res.json({ success: false, message: 'Cette catégorie existe déjà'});

        const newCategory = await Categories.create({ category_name, description });
        console.log('Nouvelle catégorie : ', newCategory);
        return res.json({ success: true, message: 'Nouvelle catégorie ajouté'});
    } catch (err) {
        console.log(`Une erreur s'est produite : ${err}`);
        return res.json({ success: false, message: 'Une erreur s\'est produite'});
    }
}

exports.getAllCategories = async (req, res) => {
    try {
        const allCategories = await Categories.findAll();
        return allCategories;
    } catch (err) {
        console.log('Une erreur s\'est produite : ', err);
        return res.json({ success: false, message: 'Une erreur s\'est produite'});
    }
}

exports.modifyCategory = async (req, res) => {
    try {
        const { category_name, description } = req.body;
    } catch(err) {
        console.log('Une erreur s\'est produite : ', err);
        return res.json({ success: false, message: 'Une erreur s\'est produite'});
    }
}