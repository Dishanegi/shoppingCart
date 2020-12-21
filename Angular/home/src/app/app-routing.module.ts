import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserRegisterComponent } from 'src/app/Components/user-register/user-register.component';
import { UserLoginComponent } from 'src/app/Components/user-login/user-login.component';
import { AdminLoginComponent } from 'src/app/Components/admin-login/admin-login.component';
import { MainwatchComponent } from 'src/app/Components/mainwatch/mainwatch.component';
import { UserViewComponent } from 'src/app/Components/user-view/user-view.component';
import { AdminViewComponent } from 'src/app/Components/admin-view/admin-view.component';
import { ViewbeforeOrderComponent } from './Components/viewbefore-order/viewbefore-order.component';
import { CartComponent } from './Components/cart/cart.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { ProductTableComponent } from './Components/product-table/product-table.component';
import { HeaderComponent } from './Components/header/header.component';
import { DemocartComponent } from './Components/democart/democart.component';
import { SaleComponent } from './Components/sale/sale.component';

const routes: Routes = [{path:'', redirectTo:'mainCategory',pathMatch:'full' },
{path:'mainCategory',component:MainwatchComponent},
{path:'mainCategory/:title',component:MainwatchComponent},
  {path:'users/register',component:UserRegisterComponent},
  {path:'users/login',component:UserLoginComponent},
  {path:'admin/login',component:AdminLoginComponent},
  {path:'product/:id',component:UserViewComponent},
  {path:'admin/admin-view',component:AdminViewComponent},
  {path:'Cart/:userId/:productId/:title/:price' ,component:ViewbeforeOrderComponent},
  {path:'Cart/:userId/products',component:CartComponent},
  {path:'users/:id',component:UserProfileComponent},
  {path:'categories/:title/product',component:ProductTableComponent},
  {path:'demo',component:HeaderComponent},
  {path:'Cart/payment',component:DemocartComponent},
  {path:'categories/sale/product', component:SaleComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
