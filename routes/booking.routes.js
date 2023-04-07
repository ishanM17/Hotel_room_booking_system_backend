const express = require('express');
const router = express.Router();

const{
    bookRoom,
    getBookings,
    getAll
} = require('../controllers/booking.controller');

router.post('/post', bookRoom);
router.get('/get/:email', getBookings);
router.get('/getAll', getAll);

module.exports = router;