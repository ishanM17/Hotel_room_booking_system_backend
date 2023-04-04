const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        maxLength: [30, 'Your name cannot exceed 30 characters'],
        minLength: [3, 'Your name must be at least 3 characters long']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
        validate: [validator.isEmail, 'Please enter a valid email address']
    },
    mobile: {
        type: String,
        required: [true, 'Mobile number is required'],
        maxLength: [10, 'Please enter a valid mobile number'],
        minLength: [10, 'Please enter a valid mobile number']
    },
    comment: {
        type: String,
        required: [true, 'Please enter a comment'],
        maxLength: [400, 'comment is too large']
    }
});

module.exports = mongoose.model('Contact', contactSchema);