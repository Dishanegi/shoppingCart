var mongoose = require('mongoose');

const Schema=mongoose.Schema;

// User Schema
var AdminSchema = new Schema({
   
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
  
    } 
    
});
const Admin=mongoose.model('admin',AdminSchema);
module.exports=Admin;
