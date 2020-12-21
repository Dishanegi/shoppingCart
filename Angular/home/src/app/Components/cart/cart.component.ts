import { Component, NgZone, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import Cart from 'src/app/models/cart';
import { ActivatedRoute, Router,Params } from '@angular/router';
import {ICreateOrderRequest, IPayPalConfig} from 'ngx-paypal';
import { ICustomWindow, WindowRef } from 'src/app/window-ref.service';
import { FlashMessagesService} from 'angular2-flash-messages';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [WindowRef]
})
export class CartComponent implements OnInit {
  
  carts : Cart[]=[];
  title:string;
  price:number;
  quantity:number;

  cartTotal:number=0;
  constructor(private _productService : ProductsService, private _route:ActivatedRoute,private flashMsg:FlashMessagesService,
    private zone:NgZone,private winRef:WindowRef) {
      this._window=this.winRef.nativeWindow;
     }

     deleteProductsFromCart(id:any)
     {
       var carts=this.carts;
       this._productService.deleteCart(id)
       .subscribe(data=>
         {
           if(data.null==1)
           {
             for(var i=0; i< carts.length; i++)
             {
                if(carts[i]._id == id)
                {
                  carts.splice(i,1);
                  //console.log(data);
                 // this.flashMsg.show('One item deleted', {cssClass:'alert-success',timeout:3000});

                }
             }

           }
         });
     }





  ngOnInit() {
    this.carts.forEach(cart=>
      {
        this.cartTotal = this.cartTotal + (cart.price*cart.quantity);
      });
   
    this._route.params.subscribe((params:Params)=>
    {


      const userId=params.userId;
      if(!userId) return;
      this._productService.getCart(userId).subscribe((carts:Cart[])=> this.carts=carts);
   
    });

    
  }


private _window:ICustomWindow;
public rzp:any;

  
  public options:any = {
        "key": "rzp_test_PfZHxnJjZiqKqr",
        "amount": 50000,
        "name": "Shopholic",
        "description": "Order Details",
      
    
        "prefill": {
           "name":"Manny",
           "email":"manny@m",
        },
        "notes": {
          "address": ""},
        "theme": {
          "color": "#3880FF"
        },
        handler:this.paymentHandler.bind(this),
        modal:{
          ondismiss:(()=>{
            this.zone.run(()=>
            {
              //add current page routing if payment fails
            })

          })
        }
      };
  initPay():void{
    this.rzp = new this.winRef.nativeWindow['Razorpay'](this.options);
    this.rzp.open();

  } 
  
  paymentHandler(res:any)
  {
    this.zone.run(()=>
    {
      //add api call here
    })
  }
  
}






