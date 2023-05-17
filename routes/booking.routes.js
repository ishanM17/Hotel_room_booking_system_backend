const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const{
    bookRoom,
    getBookings,
    getAll
} = require('../controllers/booking.controller');

router.post('/post', auth, bookRoom);
router.get('/get/:email', auth, getBookings);
router.get('/getAll', auth, getAll);

module.exports = router;