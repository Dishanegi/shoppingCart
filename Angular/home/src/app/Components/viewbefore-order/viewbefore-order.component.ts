import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import  Cart   from 'src/app/models/cart';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import Product from 'src/app/models/product';
import { AuthService } from 'src/app/services/auth.service';
import { FlashMessagesService} from 'angular2-flash-messages';
@Component({
  selector: 'app-viewbefore-order',
  templateUrl: './viewbefore-order.component.html',
  styleUrls: ['./viewbefore-order.component.css']
})
export class ViewbeforeOrderComponent implements OnInit {

  products : Product[];
  product:Product;
  _id:string;
  title:string;
  price:number;
  image:string;
  image2:string;





   userId:string ;
   productId:string;
   title:string;
   price:number;
   image:string;
  

  constructor(private _productService:ProductsService,
    private _route:ActivatedRoute,private _authService:AuthService,
    private _router:Router,private flashMsg:FlashMessagesService) { 
      this._route.params.subscribe((params:Params)=>{
        this.userId=params.userId,
        this.productId=params.productId,
        this.title=params.title,
        this.price=params.price
        
      

        });
      }
    

    ngOnInit():void {
  
  
    
    }
    addTOCart(value:number)
    {
      this._productService.postCart(this.userId,this.productId,this.title,this.price, value)
      .subscribe(res=>{
        console.log(res);
       // console.log(this.uid);
       this.flashMsg.show(`${this.title} has been added to the cart`, {cssClass:'alert-success',timeout:3000});
       // alert(`${this.title} has been added to the cart`);
      });
    }





}
