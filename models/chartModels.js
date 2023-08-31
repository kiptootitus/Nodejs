const mongoose = require('mongoose')

const chartSchema = mongoose.Schema({
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
})


module.exports = mongoose.model('Chart', chartSchema)