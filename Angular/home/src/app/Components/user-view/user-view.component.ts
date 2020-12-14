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
categories: Category[] = [];
products: Product[]=[];
  constructor(private _productService:ProductsService,
    private _route:ActivatedRoute,
    private _router:Router) { }

  ngOnInit() {
    this._productService.getCategories()
    .subscribe((categories: Category[]) =>  this.categories=categories);
    
  this._route.params.subscribe((params :Params)=>
    {
      const title=params.title;
      if(!title) return;
      this._productService.getCategorywiseProducts(title)
      .subscribe((products:Product[])=> this.products=products);
    })
  }
  

}
