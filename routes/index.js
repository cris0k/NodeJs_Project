var express = require('express');
var router = express.Router();
const {query, validationResult } = require('express-validator');
const Product = require('/home/cris/Documents/Web13/Nodepop_Project/nodepop/models/Products.js');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.locals.adverts = [
    {
       name: 'Nikon Camera',
       sale: true,
       price: 950.00,
       photo: '/images/camera_nikon.jpg',
       tags:['technology', 'work']
   },
   {
       name: 'Ray-Ban Sunglasses ',
       sale: false,
       price: 250.00,
       photo: '/images/sunglasses_black.jpg',
       tags:['fashion']
    },
    {
      name: 'Fjallraven Backpack ',
      sale: true,
      price: 70.00,
      photo: '/images/backpack_fjallraven.jpg',
      tags:['fashion']
   }
   ];
  res.render('index', { title: 'Nodepop' });
  
});

module.exports = router;
