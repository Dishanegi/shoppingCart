var mongoose = require('mongoose');

var OrderSchema=mongoose.Schema({
    ProductId:{
        type: mongoose.SchemaTypes.ObjectId,
        required:true 
    },
    UserId:{
        type: mongoose.SchemaTypes.ObjectId,
        required:true
    },
    Quantity:
    {
        type:Number,
        required:true
    },
    initialDate:
    {
         type:String,
         required:true
    },
    deliveryDate:{
        type:String,
        required:true
    }
});
 
var Order = module.exports = mongoose.model('Order', OrderSchema);
