import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { PizzaPageComponent } from './product/pizza-page/pizza-page.component';
import { BurgerPageComponent } from './product/burger-page/burger-page.component';
import { PotatoComponent } from './product/potato/potato.component';
import { SauceComponent } from './product/sauce/sauce.component';
import { DrinkComponent } from './product/drink/drink.component';
import { CartComponent } from './cart/cart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';




import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentComponent } from './cart/payment/payment.component';
import { CheckoutPaymentComponent } from './cart/checkout-payment/checkout-payment.component';
import { AdminModule } from './admin/admin.module';

import { OrderConfirmationComponent } from './cart/order-confirmation/order-confirmation.component';
import { Cart } from './models/cart.model';
import { Order } from './models/order.model';
import { ProductService } from './services/product.service';
import { RepositoryService } from './services/repository.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';





export function tokenGetter() {
  return localStorage.getItem('jwt')
}




@NgModule({
  declarations: [



    AppComponent,
    MainLayoutComponent,
    PizzaPageComponent,
    BurgerPageComponent,
    PotatoComponent,
    SauceComponent,
    DrinkComponent,
    CartComponent,
    PaymentComponent,
    CheckoutPaymentComponent,

    OrderConfirmationComponent,





  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,

    ReactiveFormsModule,

    BrowserAnimationsModule,


    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:44320"],
        disallowedRoutes: []

      }
    }),


    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })


  ],
  providers: [Cart, Order, ProductService, RepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
