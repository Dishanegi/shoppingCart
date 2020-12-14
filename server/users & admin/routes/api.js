const express=require('express');
const router=express.Router();
const jwt=require('jsonwebtoken');
const User=require('../models/users');
const Admin=require('../models/admin');
//get a list of users from the db
router.get('/users',function(req,res)
{
   console.log("Getting all the items");
   User.find({})
   .exec(function(err,users)
   {
       if(err)
       {
           res.send('error has occured');
       }else{
           console.log(users);
           res.json(users);
       }
   });
});

//get the users by id
router.get("/users/:id",(req,res)=>
{
 User.findById(req.params.id).then((user)=>{
if(user)
{
    res.send(user);

}
else{
    res.send("Invalid Id!");
}
 }).catch((err)=>{
     if(err)
     {
         throw err;
     }
 });
});

//create new users
router.post('/users/register',function(req,res)
{
   User.create(req.body).then(function(users)
   {
    if(users)
    {
        let payload = { subject: users._id} 
        let token = jwt.sign(payload,'secretKey');
        res.status(200).send({token});
        console.log(users);
    
    }
    else{
        res.send("Invalid Id!");
    }
     }).catch((err)=>{
         if(err)
         {
             throw err;
         }
     });
});

//user login
router.post('/users/login',(req,res)=>
{
let userData =req.body;
User.findOne({email:userData.email}, (error,user)=>
{
    if(error)
    {
        console.log(error);
    }else{
        if(!user)
        {
            res.status(401).send('Invalid Email');
        }else{
            if(user.password !== userData.password)
            {
                res.status(401).send('Invalid password');
            }else
            {
                let payload={subject: user._id}
                let tokenobj={token:jwt.sign(payload,'secretKey'),
                uid:user._id};
                res.status(200).send(tokenobj);
                console.log(user);
                console.log("User Successfully logged in");
            }
        }
    }
});
});

//get the admin details
router.get('/admin',function(req,res)
{
   console.log("Getting all the admins");
   Admin.find({})
   .exec(function(err,admin)
   {
       if(err)
       {
           res.send('error has occured');
       }else{
           console.log(admin);
           res.json(admin);
       }
   });
});

//admin data 
router.post('/admin',function(req,res)
{
   Admin.create(req.body).then(function(admin)
   {
    if(admin)
    {
    
        res.status(200).send(admin);
        console.log(admin);
    
    }
    else{
        res.send("Invalid Id!");
    }
     }).catch((err)=>{
         if(err)
         {
             throw err;
         }
     });
});


//admin login
router.post('/admin/login',(req,res)=>
{
let adminData =req.body;
Admin.findOne({username:adminData.username}, (error,admin)=>
{
    if(error)
    {
        console.log(error);
    }else{
        if(!admin)
        {
            res.status(401).send('Invalid Username');
        }else{
            if(admin.password !== adminData.password)
            {
                res.status(401).send('Invalid password');
            }else
            {
                let payload={subject: admin._id}
                let tok=jwt.sign(payload,'secretKey');
                res.status(200).send({tok});
                console.log("Admin Successfully logged in");
            }
        }
    }
});
});
//
module.exports = router;