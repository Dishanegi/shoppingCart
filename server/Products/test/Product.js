let chai=require('chai');
let chaiHttp=require('chai-http');
let server=require('../index');

//assertion style
chai.should();

chai.use(chaiHttp);

describe('Products Api',()=>
{
    /**
     * Test The GET Route
     */
    describe("GET /mainCategory",()=>
    {
        it("It should get all the maincategories",(done)=>
        {
            chai.request("http://localhost:3000")
              .get("/mainCategory")
              .end((err,response)=>
              {
                  response.should.have.status(200);
                
                  
                  done();
              });
        });
    })

    it("It should NOT GET all maincategories",(done)=>
    {
            chai.request("http://localhost:3000")
            .get("/mainCategories")
            .end((err,response)=>{
                response.should.have.status(404);
                done();
            });
             
    });



     /**
      * Test  the GET (by ID) route
    */ 

    /**
        * Test The GET Route
        */
       describe("GET /mainCategory/:id",()=>
       {
           it("It should get a specific maincategory with respect to id",(done)=>
           {
              const mainId="5fd08c0284df8e4b285274c6";

               chai.request("http://localhost:3000")
                 .get("/mainCategory/"+mainId)
                 .end((err,response)=>
                 {
                     response.should.have.status(200);
                     response.body.should.have.property('title');
                     response.body.should.have.property('slug');
                     
                     done();
                 });
           });
       });

       it("It should NOT GET that specific maincategory",(done)=>
       {
              const mainId="1";

               chai.request("http://localhost:3000")
               .get("/mainCategories/"+mainId)
               .end((err,response)=>{
                   response.should.have.status(404);
                   done();
               });
                
       });
      
      /**
     * Test The GET With Specific title
     */
    describe("GET /mainCategory/:title",()=>
    {
        it("It should get a specific maincategory with respect to title",(done)=>
        {
           const title="Fashion";

            chai.request("http://localhost:3000")
              .get("/mainCategory/"+title)
              .end((err,response)=>
              {
                  response.should.have.status(200);
                  response.body.should.have.property('title');
                  response.body.should.have.property('slug');
                  
                  done();
              });
        });
    });

    it("It should NOT GET that specific maincategory ",(done)=>
    {
           const title="disha";

            chai.request("http://localhost:3000")
            .get("/mainCategories/"+title)
            .end((err,response)=>{
                response.should.have.status(404);
                done();
            });
             
    });




     /**
     * Test The POST Route
     */
    describe("POST /mainCategory",()=>
    {
        it("It should POST a maincategory",(done)=>
        {
           const mainCategory=
           {
               title:"disha",
               slug:"abc"
           };

            chai.request("http://localhost:3000")
              .post("/mainCategory")
              .send(mainCategory)
              .end((err,response)=>
              {
                  response.should.have.status(200);
                  response.body.should.have.property('title').eq("disha");
                  response.body.should.have.property('slug').eq("abc");
                  
                  done();
              });
        });
    });

    it("It should POST a maincategory",(done)=>
    {
       const mainCategory=
       {
    
           slug:"abc"
       };

        chai.request("http://localhost:3000")
          .post("/mainCategories")
          .send(mainCategory)
          .end((err,response)=>
          {
              response.should.have.status(404);
            
              done();
          });
    });





      /**
     * Test The DELETE Route
     */
    describe("DELETE /mainCategory/:id",()=>
    {
        it("It should DELETE a maincategory",(done)=>
        {
           const mainId="5fdb059e97561c3ed4cd5b9d";

            chai.request("http://localhost:3000")
              .delete("/mainCategory/"+mainId)
              .end((err,response)=>
              {
                  response.should.have.status(200);
                
                  
                  done();
              });
        });

    });

    it("It should NOT DELETE a maincategory",(done)=>
    {
       const mainId="14";

        chai.request("http://localhost:3000")
          .delete("/mainCategories/"+mainId)
          .end((err,response)=>
          {
              response.should.have.status(404);
            
              
              done();
          });
    });
    









//Categories


    /**
     * Test The GET Route
     */
    describe("GET /categories",()=>
    {
        it("It should get all the categories",(done)=>
        {
            chai.request("http://localhost:3000")
              .get("/categories")
              .end((err,response)=>
              {
                  response.should.have.status(200);
                
                  
                  done();
              });
        });
    })

    it("It should NOT GET all categories",(done)=>
    {
            chai.request("http://localhost:3000")
            .get("/ategories")
            .end((err,response)=>{
                response.should.have.status(404);
                done();
            });
             
    });



     /**
      * Test  the GET (by ID) route
    */ 

    
       describe("GET /categories/:id",()=>
       {
           it("It should get a specific category with respect to id",(done)=>
           {
              const mainId="5fcf75bdba0d270e84df94ce";

               chai.request("http://localhost:3000")
                 .get("/categories/"+mainId)
                 .end((err,response)=>
                 {
                     response.should.have.status(200);
                     response.body.should.have.property('mainCategory');
                     response.body.should.have.property('title');
                     response.body.should.have.property('slug');
                     
                     done();
                 });
           });
       });

    it("It should NOT GET that specific category",(done)=>
       {
              const mainId="12f";

               chai.request("http://localhost:3000")
               .get("/ategories/"+mainId)
               .end((err,response)=>{
                   response.should.have.status(404);
                   done();
               });
                
       });
      
      /**
     * Test The GET With Specific title
     */
    describe("GET /categories/:title",()=>
    {
        it("It should get a specific category with respect to title",(done)=>
        {
           const title="Fruits";

            chai.request("http://localhost:3000")
              .get("/categories/"+title)
              .end((err,response)=>
              {
                  response.should.have.status(200);
                  response.body.should.have.property('mainCategory');
                  response.body.should.have.property('title');
                  response.body.should.have.property('slug');
                  
                  done();
              });
        });
    });






     /**
     * Test The POST Route
     */
    describe("POST /categories",()=>
    {
        it("It should POST a maincategory",(done)=>
        {
           const mainCategory=
           {
               mainCategory:"GIrl",
               title:"disha",
               slug:"abc"
           };

            chai.request("http://localhost:3000")
              .post("/categories")
              .send(mainCategory)
              .end((err,response)=>
              {
                  response.should.have.status(200);
                  response.body.should.have.property('mainCategory').eq("GIrl");
                  response.body.should.have.property('title').eq("disha");
                  response.body.should.have.property('slug').eq("abc");
                  
                  done();
              });
        });
    });

    it("It should NOT POST a category",(done)=>
    {
       const mainCategory=
       {
    
           slug:"abc"
       };

        chai.request("http://localhost:3000")
          .post("/ategories")
          .send(mainCategory)
          .end((err,response)=>
          {
              response.should.have.status(404);
            
              done();
          });
    });





      /**
     * Test The DELETE Route
     *
     **/
    describe("DELETE /categories/:id",()=>
    {
        it("It should DELETE a category",(done)=>
        {
           const mainId="5fdb1ccfaf1440245c401050";

            chai.request("http://localhost:3000")
              .delete("/categories/"+mainId)
              .end((err,response)=>
              {
                  response.should.have.status(200);
                
                  
                  done();
              });
        });

    });

    it("It should NOT DELETE a maincategory",(done)=>
    {
       const mainId="14";

        chai.request("http://localhost:3000")
          .delete("/ategories/"+mainId)
          .end((err,response)=>
          {
              response.should.have.status(404);
            
              
              done();
          });
    });
    







//Products



/**
* Test The GET Route
*/
describe("GET /product",()=>
{
it("It should get all the products",(done)=>
{
chai.request("http://localhost:3000")
.get("/product")
.end((err,response)=>
{
    response.should.have.status(200);
  
    
    done();
});
});
})

it("It should NOT GET all products",(done)=>
{
chai.request("http://localhost:3000")
.get("/pro")
.end((err,response)=>{
  response.should.have.status(404);
  done();
});

});



/**
* Test  the GET (by ID) route
*/ 


describe("GET /product/:id",()=>
{
it("It should get a product  with respect to id",(done)=>
{
const mainId="5fd6a5bd4a0d7428eccca195";

 chai.request("http://localhost:3000")
   .get("/product/"+mainId)
   .end((err,response)=>
   {
       response.should.have.status(200);
       response.body.should.have.property('title');
       response.body.should.have.property('slug');
       response.body.should.have.property('desc');
       response.body.should.have.property('category');
       response.body.should.have.property('price');
       response.body.should.have.property('image');
       response.body.should.have.property('image2');


       
       done();
   });
});
});

it("It should NOT GET that specific product with respect to id",(done)=>
{
const mainId="12f";

 chai.request("http://localhost:3000")
 .get("/ategories/"+mainId)
 .end((err,response)=>{
     response.should.have.status(404);
     done();
 });
  
});

/**
* Test The GET With Specific title
*/
describe("GET /product/:category",()=>
{
it("It should get a specific product with respect to title",(done)=>
{
const title="Women's Blouse top";

chai.request("http://localhost:3000")
.get("/product/"+title)
.end((err,response)=>
{
    response.should.have.status(200);
    response.body.should.have.property('title');
    response.body.should.have.property('slug');
    response.body.should.have.property('desc');
    response.body.should.have.property('category');
    response.body.should.have.property('price');
    response.body.should.have.property('image');
    response.body.should.have.property('image2');
 
    
    done();
});
});
});






/**
* Test The POST Route
*/
describe("POST /product",()=>
{
it("It should POST a product",(done)=>
{
const product=
{
title:"disha",
slug:"abc",
 desc:"abc",
 category:"GIrl",

 price:20,
 image:"ag",
 image2:"ahh"
};

chai.request("http://localhost:3000")
.post("/product")
.send(product)
.end((err,response)=>
{
    response.should.have.status(200);
    response.body.should.have.property('title').eq('disha');
    response.body.should.have.property('slug').eq('abc');
    response.body.should.have.property('desc').eq('abc');
    response.body.should.have.property('category').eq('GIrl');
    response.body.should.have.property('price').eq(20);
    response.body.should.have.property('image').eq('ag');
    response.body.should.have.property('image2').eq('ahh');
    
    done();
});
});
});

it("It should NOT POST a category",(done)=>
{
const mainCategory=
{

slug:"abc"
};

chai.request("http://localhost:3000")
.post("/egories")
.send(mainCategory)
.end((err,response)=>
{
response.should.have.status(404);

done();
});
});





/**
* Test The DELETE Route
*
**/
describe("DELETE /product/:id",()=>
{
it("It should DELETE a product",(done)=>
{
const mainId="5fdb221f16fb7b22600f10d8";

chai.request("http://localhost:3000")
.delete("/product/"+mainId)
.end((err,response)=>
{
    response.should.have.status(200);
  
    
    done();
});
});

});

it("It should NOT DELETE a product",(done)=>
{
const mainId="14";

chai.request("http://localhost:3000")
.delete("/ategories/"+mainId)
.end((err,response)=>
{
response.should.have.status(404);


done();
});
});








//Cart


/**
* Test The GET Route
*/




describe("GET /Cart",()=>
{
it("It should get all the products ",(done)=>
{
chai.request("http://localhost:3000")
.get("/Cart")
.end((err,response)=>
{
    response.should.have.status(200);
  
    
    done();
});
});
})

it("It should NOT GET all products",(done)=>
{
chai.request("http://localhost:3000")
.get("/pro")
.end((err,response)=>{
  response.should.have.status(404);
  done();
});

});



/**
* Test  the GET (by ID) route
*/ 


describe("GET /Cart/:id",()=>
{
it("It should get a product  with respect to id",(done)=>
{
const mainId="5fdc12f4e33627323ce86ffa";

 chai.request("http://localhost:3000")
   .get("/Cart/"+mainId)
   .end((err,response)=>
   {
       response.should.have.status(200);
       response.body.should.have.property('userId');
       response.body.should.have.property('productId');
       response.body.should.have.property('title');
       response.body.should.have.property('price');
       response.body.should.have.property('quantity');
      


       
       done();
   });
});
});

it("It should NOT GET that specific product with respect to id",(done)=>
{
const mainId="12f";

 chai.request("http://localhost:3000")
 .get("/ategories/"+mainId)
 .end((err,response)=>{
     response.should.have.status(404);
     done();
 });
  
});

/**
* Test The GET With Specific title
*
describe("GET /Cart/:userId/products",()=>
{
it("It should get a specific product with respect to title",(done)=>
{
const userId="5fcb2e13f138a4364cdaaf19";

chai.request("http://localhost:3000")
.get(`/Cart/${userId}/products`)
.end((err,response)=>
{
    response.should.have.status(200);
    response.body.should.have.property('userId');
    response.body.should.have.property('productId');
    response.body.should.have.property('title');
    response.body.should.have.property('price');
    response.body.should.have.property('quantity');
   
 
 
    
    done();
});
});
});
*/






/**
* Test The POST Route
*
describe("POST /product",()=>
{
it("It should POST a product",(done)=>
{
const product=
{
userId:"5fcddbdd5d18a2199861649a",
productId:"5fd6a7fa4a0d7428eccca198",
title:"Women's Yellow Top",
price:600,
quantity:1

 
};

chai.request("http://localhost:3000")
.post("/product")
.send(product)
.end((err,response)=>
{
    response.should.have.status(200);
    response.body.should.have.property('userId').eq('5fcddbdd5d18a2199861649a');
    response.body.should.have.property('productId').eq('5fd6a7fa4a0d7428eccca198');
    response.body.should.have.property('title').eq("Women's Yellow Top");
    response.body.should.have.property('price').eq(600);
    response.body.should.have.property('quantity').eq(1);
    
    done();
});
});
});

it("It should NOT POST a cart",(done)=>
{
const mainCategory=
{

slug:"abc"
};

chai.request("http://localhost:3000")
.post("/egories")
.send(mainCategory)
.end((err,response)=>
{
response.should.have.status(404);

done();
});
});

*/



/**
* Test The DELETE Route
*
**
describe("DELETE /product/:id",()=>
{
it("It should DELETE a product",(done)=>
{
const mainId="5fdb221f16fb7b22600f10d8";

chai.request("http://localhost:3000")
.delete("/product/"+mainId)
.end((err,response)=>
{
    response.should.have.status(200);
  
    
    done();
});
});

});

it("It should NOT DELETE a product",(done)=>
{
const mainId="14";

chai.request("http://localhost:3000")
.delete("/ategories/"+mainId)
.end((err,response)=>
{
response.should.have.status(404);


done();
});
});



**/
//
describe("GET /mainCategory/:title/categories",()=>
{
it("It should get a specific product with respect to title",(done)=>
{
const title="Fresh";

chai.request("http://localhost:3000")
.get(`/mainCategory/${title}/categories`)
.end((err,response)=>
{
    response.should.have.status(200);

 
    
    done();
});
});
})

it("It should NOT GET that specific category",(done)=>
{
const title="12f";

 chai.request("http://localhost:3000")
 .get(`/mainCategory/${title}/categori`)
 .end((err,response)=>{
     response.should.have.status(404);
     done();
 });
  
});




describe("GET /categories/:title/product",()=>
{
it("It should get a specific product with respect to title",(done)=>
{
const title="Fruits";

chai.request("http://localhost:3000")
.get(`/categories/${title}/product`)
.end((err,response)=>
{
    response.should.have.status(200);

 
    
    done();
});
});
})

it("It should NOT GET that specific category",(done)=>
{
const title="12f";

 chai.request("http://localhost:3000")
 .get(`/mainCategory/${title}/categori`)
 .end((err,response)=>{
     response.should.have.status(404);
     done();
 });
  
});





















}
);