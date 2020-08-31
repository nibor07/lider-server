const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    id:{
        type: Number,
        required: true,
        unique: true
    },
    brand:{
        type: String,
        trim: true
    },
    description:{
        type: String,
        trim: true        
    },
    image:{
        type: String,
        trim: true
    },
    price:{
        type: Number
    }
});

module.exports = mongoose.model('Producto', ProductoSchema);