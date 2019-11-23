import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { CheckOrderComponent } from './order/order.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'auth/:code/:account', component: AuthComponent },
  { path: 'check', component: CheckOrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
