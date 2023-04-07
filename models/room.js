const mongoose = require('mongoose');
const schema = mongoose.schema;

const roomSchema = new Schema({
    room_type: {
        type: String,
        require: [true, 'Room type is required'],
        enum: ['executive', 'deluxe', 'luxury']
    },
    availability: {
        type: Number,
        requird: [true, 'Room availability is required'],
    },
    price: {
        type: Number,
        required: [true, 'Room price is required']
    }
});

module.exports = mongoose.model('Room', roomSchema);