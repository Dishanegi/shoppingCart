var mongoose = require('mongoose');

// Product Schema
var ProductSchema = mongoose.Schema({
   
    title: {
        type: String,
        
    },
    slug: {
        type: String
    },
    desc: {
        type: String,
        
    },
    category: {
        type: String,
    
    },
    price: {
        type: Number,
        
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

var Product = module.exports = mongoose.model('Product', ProductSchema);