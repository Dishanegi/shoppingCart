const express=require('express');
const bodyParser=require('body-parser');
const mongoose= require('mongoose');
const router=require('./routes/api');
const cors=require('cors');
//assigning the poperties of express

const app=express();

//CORS middleware
/*var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'example.com');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}*/

//connect to mongodb
mongoose.connect('mongodb+srv://disha:disha@casestudy.pidev.mongodb.net/shoppingCart?retryWrites=true&w=majority');
var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function()
{
    console.log('Connected to the database');
});
mongoose.Promise=global.Promise;

app.use(cors());
//app.use(allowCrossDomain);
app.use(bodyParser.json());


//initalize the routes
app.use('/',router);

//listen for requests
const port=3000;
app.listen(port,()=>
{
    console.log("Listening to port for requests "+port);
});

