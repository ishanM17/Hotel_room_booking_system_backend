const User = require('../models/user');

const register = async (req, res)=>{
    try{
        const { name, lname, email, password} = req.body;
        const userExists = await User.findOne({email: email});
        if(userExists){
            return res.status(400).send({status: 'User already exists'});
        }

        const newUser = await User.create({
            name: name,
            lname: lname,
            email: email,
            password: password,
          });
          return res.status(201).send({
            message: 'Signup successful'
          });
    } catch(err){
        return res.status(500).send({
            message: err.message || 'some error has occurred while creating user.'
        });
    }
};

const login = async (req, res)=>{
    try{
        const {email, password} = req.body;

        const user = await User.findOne({email: email});
        if(!user){
            return res.status(404).send({ message: 'User not found' });
        }

        const isPasswordMatched = await user.comparePassword(password);
        if(!isPasswordMatched){
            return res.status(401).send({ message: 'Invalid password'});
        }
        return res.status(200).send({
            message: 'login successful'
        });
    } catch(err){
        return res.status(500).send({ message: err.message });
    }
};

module.exports = {
    login,
    register
};