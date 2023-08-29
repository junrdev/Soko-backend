const mongoose = require('mongoose');

const productSchema = mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        MinLength: [7, 'short product name'],
        MaxLength: [12, 'long product name']
    },

    description:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        MinLength: [7, 'short product name'],
        MaxLength: [20, 'long description']
    },

    provider:{
        type:String
    },

    primaryImage:{
        type:String,
        required:true
    },

    images:{
        type: [String]
    },

    stock:{
        type:Number,
        required:true
    },

    dateAdded:{
        type:Date,
        default:Date.now()
    },

    category:{
        type:String,
        enum:[
            "Fruits", "Accessories", "Clothing", "Home Decor", "Appliances", "Computing Devices"
        ],
        required:true
    }
});

module.exports = mongoose.model('Product', productSchema);