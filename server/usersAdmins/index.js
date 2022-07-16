const express=require('express');
const bodyParser=require('body-parser');
const mongoose= require('mongoose');
const router=require('./routes/api');
const cors=require('cors');
//assigning the poperties of express

const app=express();

//connect to mongodb
//mongoose.connect('mongodb://localhost/shoppingCart');
mongoose.connect('mongodb+srv://disha:disha@casestudy.pidev.mongodb.net/shoppingCart?retryWrites=true&w=majority');
var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function()
{
    console.log('Connected to the database');
});
mongoose.Promise=global.Promise;
app.use(cors());
app.use(bodyParser.json());

//initalize the routes
app.use('/',router);

//listen for requests
app.listen(process.env.port||8000,function()
{
    console.log("Listening to port for requests");
});

