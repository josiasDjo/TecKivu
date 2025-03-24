const User = require('../models/Users');
const bcrypt = require('bcrypt');
exports.createUser = async (req, res) => {
    const { username, email, password, first_name, last_name, role } = req.body;
    const EmailExist = await User.findOne({ where: { email}});
    if (EmailExist) return { success: false, message: 'Cet Email existe déjà '}

    const saltRounds = 10;
    const password_user = await bcrypt.hash(password, saltRounds);
    const newUser = await User.create({ username, email, password, first_name, last_name, role });
};

exports.getUser = async (req, res) => {

};

exports.updateUser = async (req, res) => {

};

exports.deleteUser = async (req, res) => {

}