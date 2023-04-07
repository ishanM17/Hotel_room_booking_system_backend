const express = require('express');
const router = express.Router();

const{
    bookRoom,
    getBookings
} = require('../controllers/booking.controller');

router.post('/add', bookRoom);
router.get('/getAll/:id', getBookings);

module.exports = router;