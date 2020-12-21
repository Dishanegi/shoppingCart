var mongoose = require('mongoose');

// Product Schema
var SaleSchema = mongoose.Schema({
   
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String
    },
    desc: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        //imageUrl: String,
        //ImageTitle:String,
        //uploade:{type:Date,default:Date.name}
        type: String,
    },
    image2:
    {
        type: String,
    }
    
});

var Sale = module.exports = mongoose.model('Sale', SaleSchema);