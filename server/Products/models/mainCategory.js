  
var mongoose = require('mongoose');

// Category Schema
var mainCategorySchema = mongoose.Schema({
    title:{
        type:String

    },
    slug: {
        type: String
    }
    
});

var mainCategory = module.exports = mongoose.model('mainCategory', mainCategorySchema);