const express=require('express');
const router=express.Router();

const Page=require('../models/page');

//get a list of pages from the db
router.get('/',function(req,res)
{
   console.log("Getting all the items");
   Page.find({})
   .exec(function(err,pages)
   {
       if(err)
       {
           res.send('error has occured');
       }else{
           console.log(pages);
           res.json(pages);
       }
   })
});


//create new objects
router.post('/',function(req,res)
{
   Page.create(req.body).then(function(pages)
   {
       res.send(pages);
   });
});
module.exports = router;