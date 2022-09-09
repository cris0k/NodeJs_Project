const mongoose = require('mongoose')

const productsSchema = mongoose.Schema({
    name: String,
    sale: Boolean,
    price: Number,
    photo: String,
    tags:[String]
}, {
    collection: 'products'
})

const Product = mongoose.model('Product', productsSchema)

module.exports = Product