const mongoose = require('mongoose')
const Schema = mongoose.Schema


const productSchema = new Schema ({
     
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }

})


module.exports = mongoose.model('product', productSchema)