

const express=require('express');
const router=express.Router();
const Order=require('../models/order');
const mongoose= require('mongoose');
const axios=require ('axios');
const nodemailer=require('nodemailer');



//Create a new order

router.post('/orders',(req,res)=>{

    console.log("Request came");
    let order=req.body;
    sendMail(order,info=>
        {
            console.log(`The mail send and the id is `)
            res.send(info);
        
     });
     Order.create(req.body).then(function(list)
     {
         res.send(list);
     });

});

async function sendMail(user,callback)
{
    // create reusable transporter object using the default smtp transport
    let transporter=nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:587,
        secure:false,
        auth:{
            user:"shopholicsupersale@gmail.com",
            pass:"Di$haNegi@1998"

        }
    });


let mailOptions={
    from:"shopholicsupersale@gmail.com",
    to:user.email,
    subject:"Thankyou for shopping with Shopholic",
    html:`<h1> Hi ${user.name}</h1><br>
    <h4>You will recive your order within 7 days and it would be delivered to ${user.address}</h4><br>
    <h5>We hope you like our services. Have a good day</h5>`
}

//send mail with defined transport object
let info=await transporter.sendMail(mailOptions);
callback(info);


}





router.get("/orders",(req,res)=>{
    Order.find().then((products)=>
    {
        res.json(products);
    }).catch((err)=>
    {
         if(err)
         throw err;
    }
    )
});

router.get("/orders/:id",(req,res)=>{
    Order.findById(req.params.id).then((order)=>
    {
        if(order)
        {
          axios.get("http://localhost:8000/users/"+ order.UserId).then((response)=>
          {
           //console.log(response);
           var orderObject={userName:response.data.name, productName:'',quantity:order.Quantity};

           axios.get("http://localhost:3000/product/"+ order.ProductId).then((response)=>
           {
             orderObject.productName= response.data.title;
             res.json(orderObject);
           });
           
          });
          //res.send("Quick response");
        }else{
            res.send("Invalid Order");
        }
    });
});

//My orders
router.get('/orders/myOrders/:UserId',(req,res)=>
{
    var ObjectId=mongoose.Types.ObjectId(req.params.UserId);
    var myArr=[];
   
    Order.find({UserId:ObjectId}).then((response)=>
    {
      for(let i of response)
      {
        axios.get("http://localhost:3000/product/"+ i.ProductId).then((response)=>
        {   var orderObj={
           
          
            productName:'',
            quantity:i.Quantity,
            productPrice:'',
            productImage:'',
            initialDate:i.initialDate,
            deliveryDate:i.deliveryDate
          
       }
            orderObj.productName= response.data.title;
            orderObj.productPrice= response.data.price;
            orderObj.productImage= response.data.image;

        
       myArr.push(orderObj);
       console.log(myArr);
       res.send(myArr);
        });
        }
     

    }).catch((err)=>
    {
        if(err)
        {
            throw err;
        }

    });
  
});

module.exports = router ;