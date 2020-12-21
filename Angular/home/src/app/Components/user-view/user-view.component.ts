import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import Category from 'src/app/models/category';
import Product   from 'src/app/models/product';
import { ActivatedRoute, Router,Params } from '@angular/router';
@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

products: Product[]=[];

products : Product[];
product:Product;
_id:string;
title:string;
price:number;
image:string;
image2:string;
  constructor(private _productService:ProductsService,
    private _route:ActivatedRoute,
    private _router:Router) { }

  ngOnInit() {
   
    
  this._route.params.subscribe((params :Params)=>
    {
      const id=params.id;
      if(!id) return;
      this._productService.getSpecificProductDetails(id)
      .subscribe((products:Product[])=> this.products=products);
    })
  }
  

}
