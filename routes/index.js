const { response } = require('express');
var express = require('express');
var router = express.Router();
const Product = require('/home/cris/Documents/Web13/Nodepop_Project/nodepop/models/Products.js');

/* GET home page. */
router.get('/', async(req, res, next) => {
  try {
    const name = req.query.name;
    const tags = req.query.tags;
    const sale = req.query.sale;
    const price = req.query.price;
    
    const skip = req.query.skip;
    const limit = req.query.limit;
    
    const fields = req.query.fields;
    const sort = req.query.sort;

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
    if (price){
      filter.price = {'$lte': parseInt(price)}
    }
    

    const products = await Product.list(filter, skip, limit, fields, sort);
    
    res.locals.adverts = products;

    res.render('index', { title: 'Nodepop' });

} catch (err) {
  next(err);
}
});

module.exports = router;
