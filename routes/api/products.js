const express = require('express');
const router = express.Router();
const Product = require('../../models/Products.js');
const upload = require ('../../lib/multerConfig')

//GET /api/products
// returns a list of products

router.get('/', async (req, res, next) => {
  try {
       
    const products = await Product.find();
  
    res.json({ adverts: products });
  
    } catch (err) {
      next(err);
    }
  });

// POST /api/products (body)
// creates an ad

router.post('/', upload.single('photo'), async (req, res, next) => {
  try {
    const advertData = req.body;

    advertData.photo = req.file.filename

    const product = new Product(advertData);

    const productSaved = await product.save();

    res.json({ result: productSaved });

  } catch (err) {
    next(err);
  }
});

  module.exports = router;
  