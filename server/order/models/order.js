var mongoose = require('mongoose');

var OrderSchema=mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email: {
        type: String,
        required: true,
       
    },
    address:
    {
         type:String,
         required:true
    },
    state:{
        type:String,
        required:true
    },
    zip:{
        type:Number,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    }
});
 
var Order = module.exports = mongoose.model('Order', OrderSchema);
