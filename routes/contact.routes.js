const express = require('express');
const router = express.Router();

const {
    createPost
} = require('../controllers/contact.controller');

router.post('/post', createPost);

module.exports = router;