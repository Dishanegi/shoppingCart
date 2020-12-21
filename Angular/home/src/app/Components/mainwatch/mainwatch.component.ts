import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import Category from 'src/app/models/category';
import Product   from 'src/app/models/product';
import MainCategory from 'src/app/models/mainCategory';
import { ActivatedRoute, Router,Params } from '@angular/router';
import { MessengerService } from 'src/app/services/messenger.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-mainwatch',
  templateUrl: './mainwatch.component.html',
  styleUrls: ['./mainwatch.component.css']
})
export class MainwatchComponent implements OnInit {
  uid='';
  categories: Category[] = [];
  mainCategories:MainCategory[]=[];
  products:Product[]=[];
     
    
   
  constructor(private _productService:ProductsService,
    private _route:ActivatedRoute,
    private _router:Router,private msg:MessengerService,
   private _authService:AuthService) { }

    products : Product[];
    product:Product;
    _id:string;
    title:string;
    price:number;
    image:string;
    image2:string;
    

    ngOnInit() {

      this._productService.getProducts()
      .subscribe(products =>
        this.products=products);


      this._productService.getmainCategory()
      .subscribe((mainCategories: MainCategory[]) =>  this.mainCategories=mainCategories);
      
    this._route.params.subscribe((params :Params)=>
      {
        const title=params.title;
        if(!title) return;
        this._productService.getmainCategorywiseCategories(title)
        .subscribe((categories:Category[])=> this.categories=categories);
      });
    }

}
