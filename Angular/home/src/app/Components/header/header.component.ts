import { Component, OnInit } from '@angular/core';
import { ProService } from 'src/app/pro.service';
import Product from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
productList:Product[]=[];
product2:Product;
  constructor(private _pro:ProService,
    private _msg:MessengerService) { }

  ngOnInit() {
    this.productList=this._pro.getProducts();

  
  }
  handleAddTOcart()
  {
    this._msg.sendMsg(this.product2);
  }

}
