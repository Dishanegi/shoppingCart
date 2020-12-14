const express=require('express');
//const category = require('../models/category');
const router=express.Router();
const Category=require('../models/category');
const mainCategory=require('../models/mainCategory');



//get mainCategories
router.get('/mainCategory',function(req,res)
{
   console.log("Getting all the items");
   mainCategory.find({})
   .exec(function(err,maincategories)
   {
       if(err)
       {
           res.send('error has occured');
       }else{
           console.log(maincategories);
           res.json(maincategories);
       }
   });
});
//get with respect title
router.get('/mainCategory/:title',function(req,res)
{
   console.log("Getting one Category");
   mainCategory.findOne({})
   .exec(function(err,maincategory)
   {
       if(err)
       {
           res.send('error has occured');
       }else{
           console.log(maincategory);
           res.send(maincategory);
       }
   });
});
//post the main categories
router.post('/mainCategory',function(req,res)
{
   mainCategory.create(req.body).then(function(maincategories)
   {
       res.send(maincategories);
   });
});

//delete specific created objects
router.delete('/mainCategory/:id',function(req,res)
{
    mainCategory.findByIdAndRemove(req.params.id).then(function(maincategory)
    {
        res.send(maincategory);
    });
})

//edit
router.patch('/mainCategory/:id' ,(req,res)=>
{
MainCategory.findOneAndUpdate({'_id':req.params.id},{ $set:req.body })
.then((maincategory)=>{
    if(maincategory)
    {
        res.json(maincategory);
    
     }
    else{
        res.json("Invalid Id!");
    }
     }).catch((err)=>{
         if(err)
         {
             throw err;
         }
     });

});


//categories

//get a list of categories from the db
router.get('/categories',function(req,res)
{
   console.log("Getting all the items");
   Category.find({})
   .exec(function(err,categories)
   {
       if(err)
       {
           res.send('error has occured');
       }else{
           console.log(categories);
           res.json(categories);
       }
   })
});
//get specific category
router.get('/categories/:title',function(req,res)
{
   console.log("Getting one Category");
   Category.findOne({})
   .exec(function(err,category)
   {
       if(err)
       {
           res.send('error has occured');
       }else{
           console.log(category);
           res.send(category);
       }
   });
});

//create new objects
router.post('/categories',function(req,res)
{
   Category.create(req.body).then(function(categories)
   {
       res.send(categories);
   });
});

//delete specific created objects
router.delete('/categories/:id',function(req,res)
{
    Category.findByIdAndRemove(req.params.id).then(function(category)
    {
        res.send(category);
    });
})

router.patch('/categories/:id' ,(req,res)=>
{
Category.findOneAndUpdate({'_id':req.params.id},{ $set:req.body })
.then((category)=>{
    if(category)
    {
        res.json(category);
    
    }
    else{
        res.json("Invalid Id!");
    }
     }).catch((err)=>{
         if(err)
         {
             throw err;
         }
     });

});
//Products
const Product=require('../models/product');

//get a list of categories from the db
router.get('/product',function(req,res)
{
   console.log("Getting all the items");
   Product.find({})
   .exec(function(err,product)
   {
       if(err)
       {
           res.send('error has occured');
       }else{
           console.log(product);
           res.json(product);
       }
   })
});

//get a specific product by it's title
router.get('/product/:category',function(req,res)
{
   console.log("Getting one product");
   Product.findOne({})
   .exec(function(err,product)
   {
       if(err)
       {
           res.send('error has occured');
       }else{
           console.log(product);
           res.json(product);
       }
   });
});
//get specific products  by specific id
router.get("/product/:id",(req,res)=>
{
 Product.findById(req.params.id).then((product)=>{
if(product)
{
    
    res.json(product);

}
else{
    res.json("Invalid Id!");
}
 }).catch((err)=>{
     if(err)
     {
         throw err;
     }
 });
});

//update sepecific items
router.put('/product/:title',function(req,res)
{
   console.log("updating specific items");
   Product.findOneAndUpdate({title:req.params.title},req.body).then(function()
   {
    Product.findOne({title:req.params.title}).then(function(product)
    {
        console.log(req.body);
        res.json(product);
    });
   });
});

//create new objects
router.post('/product',function(req,res)
{
   Product.create(req.body).then(function(product)
   {
       res.json(product);
   });
});

//update
router.patch('/product/:id' ,(req,res)=>
{
Product.findOneAndUpdate({'_id':req.params.id},{ $set:req.body })
.then((product)=>{
    if(product)
    {
        res.json(product);
    
    }
    else{
        res.json("Invalid Id!");
    }
     }).catch((err)=>{
         if(err)
         {
             throw err;
         }
     });

});
//delete specific id
router.delete('/product/:id',function(req,res)
{
    Product.findByIdAndRemove(req.params.id)
    .then((product)=>{
        if(product)
        {
            res.json(product);
        
        }
        else{
            res.json("Invalid Id!");
        }
         }).catch((err)=>{
             if(err)
             {
                 throw err;
             }
         });
});

//post items in a cart
const Cart=require('../models/cart');

router.post('/Cart/:UserId/:ProductId/:title/:price',(req,res)=>
{
new Cart({'userId':req.params.UserId,'productId':req.params.ProductId,'title':req.params.title,'price':req.params.price,'quantity':req.body.quantity})
.save()
.then((cart)=> res.send(cart))
.catch((error)=> console.log(error));
});

router.post('/Cart',function(req,res)
{
    Cart.create(req.body).then(function(list)
    {
        res.send(list);
    });
});

router.get('/Cart',function(req,res)
{
   console.log("Getting all the items in a cart");
   Cart.find({})
   .exec(function(err,cart)
   {
       if(err)
       {
           res.send('error has occured');
       }else{
           console.log(cart);
           res.json(cart);
       }
   })
});

router.get("/Cart/:id",(req,res)=>
{
 Cart.findById(req.params.id).then((product)=>{
if(product)
{
    res.json(product);

}
else{
    res.json("Invalid Id!");
}
 }).catch((err)=>{
     if(err)
     {
         throw err;
     }
 });
});


router.get('/Cart/:userId/products',(req,res)=>
{
    Cart.find({userId:req.params.userId})
    .then((products)=> res.send(products))
    .catch((error)=>console.log(error));
});

//delete cart items
router.delete('/Cart/:id',function(req,res)
{
    Cart.findByIdAndRemove(req.params.id)
    .then((cart)=>{
        if(cart)
        {
            res.json(cart);
        
        }
        else{
            res.json("Invalid Id!");
        }
         }).catch((err)=>{
             if(err)
             {
                 throw err;
             }
         });
});  

router.put('/Cart/:id',function(req,res)
{
   console.log("updating specific items");
   Cart.findByIdAndUpdate({_id:req.params.id},req.body).then(function(product)
   {
        console.log(req.body);
        res.send(product);
    });
   });
//maincategorywise categories
router.get('/mainCategory/:title/categories',(req,res)=>
{
Category.find({mainCategory:req.params.title})
.then((categories)=> res.send(categories))
.catch((error)=>console.log(error));
});
//categorywise products

router.get('/categories/:title/product',(req,res)=>
{
Product.find({category:req.params.title})
.then((products)=> res.send(products))
.catch((error)=>console.log(error));
});

module.exports = router;