  
var mongoose = require('mongoose');

// Category Schema
var CartSchema = mongoose.Schema({
        userId:{
            type: mongoose.Types.ObjectId,
            required:true
         } ,
        productId:{
            type: mongoose.Types.ObjectId,
            required:true 
        },
        title:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        quantity:
        {
            type:Number,
            required:true
        },
     
    });
    


var Cart = module.exports = mongoose.model('Cart', CartSchema);