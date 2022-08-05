import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminNavigationComponent } from './components/admin-navigation/admin-navigation.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { BasketComponent } from './components/basket/basket.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderProductListComponent } from './components/order-product-list/order-product-list.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductAddedComponent } from './components/product-added/product-added.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PaymentRealisedComponent } from './components/payment-realised/payment-realised.component';
import { HomeComponent } from './components/home/home.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserOrderListComponent } from './components/user-order-list/user-order-list.component';
import { UserOrderProductListComponent } from './components/user-order-product-list/user-order-product-list.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "admin", component: AdminNavigationComponent, children: [
    {path: "product-add", component: ProductAddComponent}, 
    {path: "product-added", component: ProductAddedComponent},
    {path: "users-list", component: UsersListComponent},
    {path: "user-orders", component: UserOrderListComponent},
    {path: "user-order-products", component: UserOrderProductListComponent}
  ]},
  {path: "products", component: ProductListComponent},
  {path: "product", component: ProductComponent},
  {path: "basket", component: BasketComponent},
  {path: "orders", component: OrderListComponent},
  {path: "order-products", component: OrderProductListComponent},
  {path: "profile", component: UserProfileComponent},
  {path: "payment-realised", component: PaymentRealisedComponent},
  {path: "", component: HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
