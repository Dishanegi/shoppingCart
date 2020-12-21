  
var mongoose = require('mongoose');

// Category Schema
var CategorySchema = mongoose.Schema({
    mainCategory:{
        type:String,
        

    },
    title: {
        type: String,
        
    },
    slug: {
        type: String
    }
    
});

var Category = module.exports = mongoose.model('Category', CategorySchema);