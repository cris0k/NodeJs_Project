const mongoose = require('mongoose')

const productsSchema = mongoose.Schema({
    name: String,
    sale: Boolean,
    price: { type: Number, min: 1, max: 10000 },
    photo: String,
    tags:[String]
}, {
    collection: 'products'
});

productsSchema.statics.list = function(filter, skip, limit, fields, sort) {
    const query = Product.find(filter);
    query.skip(skip);
    query.limit(limit);
    query.select(fields);
    query.sort(sort);
    
    return query.exec();
  }

const Product = mongoose.model('Product', productsSchema)

module.exports = Product