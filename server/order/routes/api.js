const express=require('express');
const router=express.Router();
const Order=require('../models/order');
const mongoose= require('mongoose');
const axios=require ('axios');
//Create a new order

router.post("/orders",(req,res)=>
{
   var newOrder={
    ProductId : mongoose.Types.ObjectId(req.body.ProductId),
    UserId : mongoose.Types.ObjectId(req.body.UserId),
    Quantity:req.body.Quantity,
    initialDate:req.body.initialDate,
    deliveryDate:req.body.deliveryDate


   }


   var order =new Order(newOrder)
   order.save().then(()=>
   {
   // res.send("Orders created with success");
    res.send(order);
   }).catch((err)=>
   {
       if(err)
       {
           throw err;
       }
   })
});


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