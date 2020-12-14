import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
@Component({
  selector: 'app-producttable',
  templateUrl: './producttable.component.html',
  styleUrls: ['./producttable.component.css']
})
export class ProducttableComponent implements OnInit {
 
  constructor(private productService:ProductsService) { }
  products : Product[];
  product:Product;
  title:string;
  slug:string;
  desc:string;
  category:string;
  price:number;
  image:string;
  image2:string;
  
  deleteProduct(id:any)
  {
    var products=this.products;
    this.productService.deleteProduct(id)
    .subscribe(data=>
      {
        if(data.null==1)
        {
          for(var i=0; i< products.length; i++)
          {
             if(products[i]._id == id)
             {
               products.splice(i,1);
             }
          }
        }
      });
  }
  ngOnInit():void {
    this.productService.getProducts()
    .subscribe(products =>
      this.products=products);
      
  }

}
