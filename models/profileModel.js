const mongooose = require('mongoose')

const profileSchema = mongooose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    age: {
        type: Number,
        min:0
    },
    Country: {
        type: String,
        required: true
    },
})


module.exports = mongoose.model('Profile', profileSchema)