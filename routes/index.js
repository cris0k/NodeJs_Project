const { response } = require('express');
var express = require('express');
var router = express.Router();
const {query, validationResult, body } = require('express-validator');
const Product = require('/home/cris/Documents/Web13/Nodepop_Project/nodepop/models/Products.js');

/* GET home page. */
router.get('/', async(req, res, next) => {

  const name = req.query.name;
  const tags = req.query.tags;
  const sale = req.query.sale;
  // paginación
  const skip = req.query.skip;
  const limit = req.query.limit;
  // selección de campos
  const fields = req.query.fields;
  const sort = req.query.sort;

  // ejemplos de peticiones
  // http://localhost:3000/api/agentes/?skip=2&limit=2&fields=name%20-_id
  // http://localhost:3000/api/agentes/?sort=age%20-name

  // creo el filtro vacio
  const filter = {}

  if (name) {
    filter.name = new RegExp( '.*' + req.query.name + '.*', "i");
  }

  if (tags) {
    filter.tags = tags;
  }
  if (sale) {
    filter.sale = sale;
  }

  const products = await Product.list(filter, skip, limit, fields, sort);

  
  console.log(products)
  
  res.locals.adverts = products;

  res.render('index', { title: 'Nodepop' });
});


  


module.exports = router;
