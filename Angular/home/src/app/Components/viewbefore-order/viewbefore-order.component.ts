import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import  Cart   from 'src/app/models/cart';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-viewbefore-order',
  templateUrl: './viewbefore-order.component.html',
  styleUrls: ['./viewbefore-order.component.css']
})
export class ViewbeforeOrderComponent implements OnInit {

   userId:string ;
   productId:string;
   title:string;
   price:number;
   quantity:number;
 
//uid:string='';
  constructor(private _productService:ProductsService,
    private _route:ActivatedRoute,
    private _router:Router) { 
      this._route.params.subscribe((params:Params)=>{
        this.userId=params.userId,
        this.productId=params.productId,
        this.title=params.title,
        this.price=params.price
        
      

        });
      }
    

    ngOnInit():void {
     
    
    }
    addTOCart(quantity:number)
    {
      this._productService.postCart(this.userId,this.productId,this.title,this.price,quantity)
      .subscribe(res=>{
        console.log(res);
        //console.log(this.uid);
      });
    }





}
