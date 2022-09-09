const express = require('express');
const router = express.Router();
const {query, validationResult } = require('express-validator');
const Product = require('/home/cris/Documents/Web13/Nodepop_Project/nodepop/models/Products.js');

router.get('/', async (req, res, next) => {
    try {
      const products = await Product.find();
  
      res.json({ results: products });
  
    } catch (err) {
      next(err);
    }
  });

  module.exports = router;