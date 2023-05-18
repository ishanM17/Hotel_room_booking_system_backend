const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;

const bookingSchema  = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        maxLength: [30, 'Your name cannot exceed 30 characters'],
        minLength: [3, 'Your name must be at least 3 characters long']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        validate: [validator.isEmail, 'Please enter a valid email address']
    },
    room_type: {
        type: String,
        required: [true, 'Room type is required'],
        default: 'executive',
        enum: ['executive', 'deluxe', 'luxury']
    },
    num_of_rooms: {
        type: Number,
        required: [true, 'Number of rooms is required'],
        default: 1
    },
    checkin: {
        type: Date,
        required: [true, 'checkin date is required']
    },
    checkout: {
        type: Date,
        required: [true, 'checkout date is required']
    }
});

module.exports = mongoose.model('Booking', bookingSchema);