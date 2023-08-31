const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min:0,
        required: true
        
    },
    description: {
        type: String,
        required: true
    
    },
    image: {
        type: String,
        required: true

    },
    category: {
        type: String,
        required: true

    }
})

module.exports = mongoose.model('Product', productSchema)