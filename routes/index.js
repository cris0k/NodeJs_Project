var express = require('express');
var router = express.Router();
const {query, validationResult } = require('express-validator');
const Product = require('../models/Products');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Nodepop' });
});

module.exports = router;
