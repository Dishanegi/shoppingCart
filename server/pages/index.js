const express=require('express');
const bodyParser=require('body-parser');
const mongoose= require('mongoose');

//assigning the poperties of express

const app=express();

//connect to mongodb
mongoose.connect('mongodb+srv://disha:disha@casestudy.pidev.mongodb.net/shoppingCart?retryWrites=true&w=majority');
var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function()
{
    console.log('Connected to the database');
});
mongoose.Promise=global.Promise;
app.use(bodyParser.json());

//set the routes
const pages=require('./routes/PagesApi');
const adminpages=require('./routes/admin_pages');

app.use('/admin',adminpages);
app.use('/',pages);

//listen for requests
app.listen(process.env.port||8202,function()
{
    console.log("Listening to port for requests");
});

