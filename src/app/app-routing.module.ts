import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { CheckOrderComponent } from './order/order.component';
import { CheckoutOrderComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'auth/:code/:account', component: AuthComponent },
  { path: 'check', component: CheckOrderComponent },
  { path: 'checkout', component: CheckoutOrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
