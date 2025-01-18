const express = require('express');
const router = express.Router();
const Produto = require('../models/Produto');

router.get('/', async (req, res) => {
    const produtos = await Produto.getAll();
    res.json(produtos);
})

module.exports = router; 
