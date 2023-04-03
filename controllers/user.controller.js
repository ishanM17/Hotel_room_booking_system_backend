const User = require('../models/user');

const register = async (req, res)=>{
    try{
        const { name, lname, email, password} = req.body;
        const userExists = await user.findOne({email: email});
        if(userExists){
            return res.status(400).send({status: 'User already exists'});
        }

        const newUser = await User.create({
            name: name,
            lname: lname,
            email: email,
            password: password,
          });
    } catch(err){
        return res.code(500).send({
            message: error.message || 'some error has occurred while vreating user.'
        });
    }
};

const login = async (req, res)=>{
    try{
        const {email, password} = req.body;

        const user = User.findOne({email: email});
        if(!user){
            return res.status(404).send({ message: 'User not found' });
        }

        const isPasswordMatched = await user.comparepassword(password);
        if(!isPasswordMatched){
            return res.status(401).send({ message: 'Invalid password'});
        }
    } catch(err){
        return res.status(500).send({ message: err.message });
    }
};

module.exports = {
    login,
    register
};