import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { ReusableBgComponent } from './reusable-bg/reusable-bg.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { CardComponent } from './card/card.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { DetailsComponent } from './details/details.component';
import { SearchComponent } from './search/search.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ReusableBgComponent,
    ShopComponent,
    CartComponent,
    CardComponent,
    CartDetailsComponent,
    DetailsComponent,
    SearchComponent,
    AccountComponent,
  ],
  exports: [ReusableBgComponent],
})
export class ComponentsModule {}
