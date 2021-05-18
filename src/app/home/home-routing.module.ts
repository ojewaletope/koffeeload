import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ShopComponent } from '../components/shop/shop.component';
import { AccountComponent } from '../components/account/account.component';
import { CartDetailsComponent } from '../components/cart-details/cart-details.component';
import { DetailsComponent } from '../components/details/details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'shop',
        component: ShopComponent,
      },
      {
        path: 'account',
        component: AccountComponent,
      },
      {
        path: 'cart-details',
        component: CartDetailsComponent,
      },
      {
        path: 'details',
        component: DetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
