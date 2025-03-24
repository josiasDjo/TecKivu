const User = require('../models/Users');
const bcrypt = require('bcrypt');
exports.createUser = async (req, res) => {
    try {
        const { username, email, password, first_name, last_name, role } = req.body;
        const EmailExist = await User.findOne({ where: { email}});
        if (EmailExist) return res.jon({ success: false, message: 'Cet Email existe déjà '})

        const saltRounds = 10;
        const password_user = await bcrypt.hash(password, saltRounds);
        const newUser = await User.create({ username, email, password_user, first_name, last_name, role });

        req.session.users = {
            id_user: newUser.user_id,
            username: newUser.username,
            nom: newUser.last_name,
            prenom: newUser.first_name,
            email: newUser.email,
            role_id: newUser.role
        }
    } catch(err) {
        console.log(`Une erreur s'est produite : ${err}`);
        return res.json({ success: false, message: 'Une erreur s\'est produite'});
    }
};

exports.getUser = async (req, res) => {

};

exports.updateUser = async (req, res) => {

};

exports.deleteUser = async (req, res) => {

}