const Booking = require('../models/booking');

const bookRoom = async (req, res)=>{
    try{
        const {name, email, mobile, room_type, num_of_rooms, checkin, checkout} = req.body;
        const newBooking = new Booking({
            name: name,
            email: email,
            mobile: mobile,
            room_type: room_type,
            num_of_rooms: num_of_rooms,
            checkin: checkin,
            checkout: checkout
        });
        await newBooking.save();
        res.status(201).send({message: 'Room has been booked'});
    } catch(err){
        res.status(500).json({ err:err.message });
    }
}

const getBookings = async (req, res)=>{
    try{
        const bookings = await Booking.find({email: req.params.email}).select('-email').select('-mobile');
        if(!bookings){
            return res.send(404).json({error: 'no rooms booked'});
        }
        res.status(200).json(bookings);
    } catch(err) {
        return res.status(500).json({error: err.message});
    }
};

const getAll = async (req, res)=>{
    try{
        const all = await Booking.find().select('-email').select('-mobile');
        if(!all){
            return res.status(404).json({error: 'no bookings found'});
        }
        res.status(200).send(all);
    } catch(err) {
        return res.status(500).send({error: err.message});
    }
};

module.exports = {
    bookRoom,
    getBookings,
    getAll
};