import { Component, NgZone, OnInit } from '@angular/core';
import { ICustomWindow, WindowRef } from 'src/app/window-ref.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import { WebService } from 'src/app/services/web.service';
import  Order  from 'src/app/models/order';
@Component({
  selector: 'app-democart',
  templateUrl: './democart.component.html',
  styleUrls: ['./democart.component.css'],
  providers: [WindowRef]
})
export class DemocartComponent implements OnInit {

cartItems=[];
orders : Order[];
order:Order;
 _id:string;
 name:string;
 email:string;
 address:string;
 city:string;
 phoneNumber:number;
 state:string;
 zip:number;

cartTotal=0;

constructor(private flashMsg:FlashMessagesService,
  private zone:NgZone,private winRef:WindowRef,
  private _webservice:WebService)
   {
    this._window=this.winRef.nativeWindow;
   }

  ngOnInit() {
    
  }

addOrders()
{
  const newOrder={
    _id:this._id,
  name:this.name,
  email:this.email,
  address:this.address,
  city:this.city,
  phoneNumber:this.phoneNumber,
  state:this.state,
  zip:this.zip

  }
  this._webservice.sendEmail("http://localhost:5000/orders", newOrder).subscribe(
    data => {
      let res:any = data; 
      console.log(
        `hey ${newOrder.name} order is placed and mail has been sent and the message id is`
      );
    },
    err => {
      console.log(err);
     
    }
  );
}


  










  private _window:ICustomWindow;
   rzp:any;
  
    
     options:any = {
          "key": "rzp_test_3BfSoKjH9X1dy1",
          "amount": 80000,
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
        this.flashMsg.show('payment Done successfully and mail is sent to your respective email id', {cssClass:'alert-success',timeout:3000});
      })
    }


  
}
