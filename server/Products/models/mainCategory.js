  
var mongoose = require('mongoose');

// Category Schema
var mainCategorySchema = mongoose.Schema({
    title:{
        type:String,
        required:true

    },
    slug: {
        type: String
    }
    
});

var mainCategory = module.exports = mongoose.model('MainCategory', mainCategorySchema);