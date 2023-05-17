const jwt = require('jsonwebtoken');
const User = require('../models/user');
require('dotenv').config();

const auth = async (req, res, next)=>{
    const header = req.header('Authorization');
    if (!header) return res.status(401).send({error: 'Unauthorized'});

    const token = header.replace('Bearer ', '');
    try{
        const decoded = jwt.verify(token, process.env.SECRET);
        const user = await User.findOne({email: decoded.email});
        if (!user) return res.status(401).send({ error: 'Unauthorized' });
        if (user.token === token) {
            req.user = user;
            next();
        } else {
            return res.status(403).send({ error: 'Invalid token' });
        }
    } catch (err) {
        return res.status(403).send({ error: err.message });
    }
}

module.exports = auth;