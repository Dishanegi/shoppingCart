import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import Cart from 'src/app/models/cart';
import { ActivatedRoute, Router,Params } from '@angular/router';
import {ICreateOrderRequest, IPayPalConfig} from 'ngx-paypal';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts : Cart[]=[];
  title:string;
  price:number;
  quantity:number;

  cartTotal:number=0;
  constructor(private _productService : ProductsService, private _route:ActivatedRoute) { }
  
  public payPalConfig ?: IPayPalConfig;

 
  private initConfig(): void {
    this.payPalConfig = {
      currency: 'INR',
      clientId: 'AQ0XH-nc6ZkRL0KvIWIRodl7Bdhakc79H06NPFKcuosW9Yku4t0vTOK4CG4dRLudrwX4itTv8p7eVMOX', // add paypal clientId here
      createOrderOnClient: (data:any) => <ICreateOrderRequest> {
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'INR',
            value: '1600',
            breakdown: {
              item_total: {
                currency_code: 'INR',
                value: '1600'
              }
            }
          },
          items: [{
            name: 'Disha',
            quantity: '1',
            category: 'DIGITAL_GOODS',
            unit_amount: {
              currency_code: 'INR',
              value: '1600',
            },
          }]
        }]
      },
      
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical',
        size: 'small',
        color: 'gold',
        shape: 'rect'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then(details => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });

      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);

      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      }
    };
  }


  ngOnInit() {
    this.carts.forEach(cart=>
      {
        this.cartTotal = this.cartTotal + (cart.price*cart.quantity);
      });
    this.initConfig();

    this._route.params.subscribe((params:Params)=>
    {


      const userId=params.userId;
      if(!userId) return;
      this._productService.getCart(userId).subscribe((carts:Cart[])=> this.carts=carts);
   
    });

    
  }
}





