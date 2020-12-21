import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TopNavBarComponent } from 'src/app/Components/top-nav-bar/top-nav-bar.component';
import { FooterComponent } from 'src/app/Components/footer/footer.component';
import { MainwatchComponent } from 'src/app/Components/mainwatch/mainwatch.component';

import { UserRegisterComponent } from 'src/app/Components/user-register/user-register.component';
import { UserLoginComponent } from 'src/app/Components/user-login/user-login.component';
import { AdminLoginComponent } from 'src/app/Components/admin-login/admin-login.component';
import { UserViewComponent } from 'src/app/Components/user-view/user-view.component';
import { AdminViewComponent } from 'src/app/Components/admin-view/admin-view.component';
import { HeaderComponent } from 'src/app/Components/header/header.component';
import { AuthService } from 'src/app/services/auth.service';
import { AdminService } from 'src/app/services/admin.service';
import { ProductTableComponent } from 'src/app/Components/product-table/product-table.component';
import { CartComponent } from './Components/cart/cart.component';
import { ViewbeforeOrderComponent } from './Components/viewbefore-order/viewbefore-order.component';
import { ProductsService } from './services/products.service';
import { NgxPayPalModule } from 'ngx-paypal';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { DemocartComponent } from './Components/democart/democart.component';
import { WebService } from './services/web.service';
import { SaleComponent } from './Components/sale/sale.component';
@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterComponent,
    MainwatchComponent,
    UserRegisterComponent,
    UserLoginComponent,
    AdminLoginComponent,
    UserViewComponent,
    AdminViewComponent,
    HeaderComponent,
    ProductTableComponent,
    CartComponent,
    ViewbeforeOrderComponent,
    UserProfileComponent,
    DemocartComponent,
    SaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,
    HttpClientModule,NgxPayPalModule,
    FlashMessagesModule.forRoot()
  
  ],
  providers: [AuthService,AdminService,ProductsService,WebService
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
