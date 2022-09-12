const { response } = require('express');
var express = require('express');
var router = express.Router();
const {query, validationResult, body } = require('express-validator');
const Product = require('/home/cris/Documents/Web13/Nodepop_Project/nodepop/models/Products.js');

/* GET home page. */
router.get('/', async(req, res, next) => {

  const products = await Product.find();
  console.log(products)
  
  res.locals.adverts = products;

  res.render('index', { title: 'Nodepop' });
});


  


module.exports = router;
