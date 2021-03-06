import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'auth', loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule) },
                        { path: 'account', loadChildren: () => import('../account/account.module').then(m => m.AccountModule) },
                        { path: 'order', loadChildren: () => import('../order/order.module').then(m => m.OrderModule) },
                        { path: 'restaurant', loadChildren: () => import('../restaurant/restaurant.module').then(m => m.RestaurantModule) }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
