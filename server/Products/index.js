const express=require('express');
const bodyParser=require('body-parser');
const mongoose= require('mongoose');
const router=require('./routes/api');
const cors=require('cors');
const swaggerJSDoc=require('swagger-jsdoc');
const swaggerUI=require('swagger-ui-express');

//assigning the poperties of express
//connect to mongodb






const app=express();

//app.use(allowCrossDomain);
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://disha:disha@casestudy.pidev.mongodb.net/shoppingCart?retryWrites=true&w=majority');
var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function()
{
    console.log('Connected to the database');
});
  mongoose.Promise=global.Promise;

app.use(cors());





//initalize the routes
app.use('/',router);


const swaggerOptions={
    definition:{
        openapi:'3.0.0',
        info:{
            title:'Shopholic',
            version:'1.0.0',
            description:'Ecommerce website',
            contact:{
                name:'Disha Negi',
                email:'dishanegi.dn@gmail.com'
            },
            servers:["http://localhost:3000"]
        }
    },
    apis:["index.js"]
    
}

const swaggerDocs=swaggerJSDoc(swaggerOptions);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));



app.use(express.json());









/**
 * @swagger
 * definitions:
 *  mainCategory:
 *   type: object
 *   properties:
 *    title:
 *     type: string
 *     description: title of mainCategory
 *     example: 'Fabc'
 *    slug:
 *     type: string
 *     description: site of specific item
 *     example: 'organic fruits'
 *  categories:
 *   type: object
 *   properties:
 *    mainCategory:
 *     type: string
 *     description: title of the main category
 *     example: 'Fresh'
 *    title:
 *     type: string
 *     description: title of category
 *     example: 'Fruits'
 *    slug:
 *     type: string
 *     description: site of the specific item
 *     example: 'Organic fruits site'
 *  product:
 *   type: object
 *   properties:
 *    title:
 *     type: string
 *     description: name of the product
 *     example: 'mangoes'
 *    slug:
 *     type: string
 *     description: site of the specific item
 *     example: 'Organic fruits site'
 *    desc:
 *     type: string
 *     description: desc of the product
 *     example: 'Organic Farm Fruits'
 *    category:
 *     type: string
 *     description: category of the product
 *     example: 'Fruit'
 *    price:
 *     type: number
 *     description: cost of the product
 *     example: 500
 *   image:
 *     type: string
 *     description: img of the product
 *     example: 'imageee'
 *    image2:
 *     type: string
 *     description: img of the product
 *     example: 'imageee2'
 */



 /**
  * @swagger
  * /mainCategory:
  *  post:
  *   summary: create mainCategory
  *   description: create mainCategory 
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *        $ref: '#/definitions/mainCategory'
  *   responses:
  *    200:
  *     description: success
  *    500:
  *     description: failure 
  */
 app.post("/mainCategory");



 

 /**
  * @swagger
  * /categories:
  *  post:
  *   summary: create category
  *   description: create category 
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *        $ref: '#/definitions/categories'
  *   responses:
  *    200:
  *     description: success
  *    500:
  *     description: failure 
  */
 app.post("/categories");


  /**
  * @swagger
  * /product:
  *  post:
  *   summary: create mainCategory
  *   description: create mainCategory 
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *        $ref: '#/definitions/Product'
  *   responses:
  *    200:
  *     description: success
  *    500:
  *     description: failure in creating employee
  */
 app.post("/product");

/**
 * @swagger
 * /mainCategory:
 *  get:
 *   summary: get all mainCategories
 *   description: get all maincategories
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: error
 */
app.get('/mainCategory',cors());


/**
 * @swagger
 * /categories:
 *  get:
 *   summary: get all mainCategories
 *   description: get all maincategories
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: error
 */
app.get('/categories',cors());
/**
 * @swagger
 * /product:
 *  get:
 *   summary: get all mainCategories
 *   description: get all maincategories
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: error
 */
app.get('/product',cors());



/**
 * @swagger
 * /mainCategory/{maincategory_id}:
 *  delete:
 *   summary: delete maincategory
 *   description: delete maincategory
 *   parameters:
 *    - in: path
 *      name: employee_id
 *      schema:
 *       type: string
 *      required: true
 *      description: id of the maincategory
 *      example: "5fdb957fecd88d0554e87c89"
 *   responses:
 *    200:
 *     description: success
 */
app.delete("/mainCategory/:id")



/**
 * @swagger
 * /categories/{categories_id}:
 *  delete:
 *   summary: delete categories
 *   description: delete categories
 *   
 *   responses:parameters:
 *    - in: path
 *      name: category_id
 *      schema:
 *       type: string
 *      required: true
 *      description: id of the category
 *      example: "5fdb898f8529b53c0420505c"
 *    200:
 *     description: success
 */
app.delete("/categories/:id")




/**
 * @swagger
 * /product/{product_id}:
 *  delete:
 *   summary: delete product
 *   description: delete product
 *   parameters:
 *    - in: path
 *      name: product_id
 *      schema:
 *       type: string
 *      required: true
 *      description: id of product
 *      example: "5fdc029da171c6355437e657"
 *   responses:
 *    200:
 *     description: success
 */
app.delete("/product/:id")






//listen for requests
const port=3000;
app.listen(port,()=>
{
    console.log("Listening to port for requests "+port);
});

/**
 * @swagger
 * /categories/{category.title}/product:
 *  get:
 *   summary: get all mainCategories
 *   description: get all maincategories
 *   parameters:
 *     - in: path
 *       name: category title
 *       schema:
 *       type: string
 *       required: true
 *       description: title of category
 *       example: "Women's Fashion"
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: error
 */
app.get('/categories/:title/product',cors());
