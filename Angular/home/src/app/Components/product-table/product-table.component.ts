import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import Product   from 'src/app/models/product';
import { ActivatedRoute, Router,Params } from '@angular/router';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {
  products:Product[]=[];
  constructor(private _productService:ProductsService,
    private _route:ActivatedRoute,
    private _router:Router) { }



    products : Product[];
    product:Product;
    _id:string;
    title:string;
    price:number;
    image:string;
    image2:string;
    
  ngOnInit(): void {
      
         
    this._route.params.subscribe((params :Params)=>
      {
        const title=params.title;
        if(!title) return;
        this._productService.getCategorywiseProducts(title)
        .subscribe((products:Product[])=> this.products=products);
      });
    
  }

}
