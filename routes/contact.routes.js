const express = use('express');
const router = express.Router();

const {
    createPost
} = require('../controllers/contact.controller');

router.post('/post', createPost);