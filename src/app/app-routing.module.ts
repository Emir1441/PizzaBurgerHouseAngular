import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from "./shared/main-layout/main-layout.component";
import { PizzaPageComponent } from "./product/pizza-page/pizza-page.component";
import { BurgerPageComponent } from "./product/burger-page/burger-page.component";
import { PotatoComponent } from "./product/potato/potato.component";
import { SauceComponent } from "./product/sauce/sauce.component";
import { DrinkComponent } from "./product/drink/drink.component";
import { CartComponent } from "./cart/cart.component";
import { CheckoutPaymentComponent } from './cart/checkout-payment/checkout-payment.component';
import { OrderConfirmationComponent } from './cart/order-confirmation/order-confirmation.component';



const routes: Routes = [
  { path: "checkout/step1", component: CheckoutPaymentComponent },
  { path: "checkout/confirmation", component: OrderConfirmationComponent },
  { path: 'cart', component: CartComponent },
  {

    path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: 'pizza', pathMatch: 'full' },
      { path: 'pizza', component: PizzaPageComponent },
      { path: 'burger', component: BurgerPageComponent },
      { path: 'potato', component: PotatoComponent },
      { path: 'sauce', component: SauceComponent },
      { path: 'drink', component: DrinkComponent },
      { path: '**', redirectTo: 'pizza' }



    ],

  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
