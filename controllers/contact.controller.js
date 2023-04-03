const Contact = require('../models/contact');

const createPost = async (req, res) => {
    try{
        const {name, email, mobile, comment} = req.body;
        const newPost = new Contact({
            name: name,
            email: email,
            mobile: mobile,
            comment: comment
        });
        await newPost.save();
        res.status(201).send({message: 'Feedback has been posted'});
    } catch(err){
        res.status(500).json({ err:err.message });
    }
}

module.exports = {
    createPost
};