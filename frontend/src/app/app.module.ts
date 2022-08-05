import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './core/auth.service';
import { TokenStorage } from './core/token.storage';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Interceptor } from './core/interceptor';
import { CustomMaterialModule } from './core/material.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { ProgressSpinnerDialogComponent } from './components/progress-spinner-dialog/progress-spinner-dialog.component';
import { AdminNavigationComponent } from './components/admin-navigation/admin-navigation.component';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './service/product.service';
import { UserService } from './service/user.service';
import { ProductComponent } from './components/product/product.component';
import { BasketService } from './service/basket.service';
import { BasketComponent } from './components/basket/basket.component';
import { OrderService } from './service/order.service';
import { PaymentComponent } from './components/payment/payment.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderProductListComponent } from './components/order-product-list/order-product-list.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { CategoryService } from './service/category.service';
import { BrandService } from './service/brand.service';
import { PictureService } from './service/picture.service';
import { ProductAddedComponent } from './components/product-added/product-added.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PaymentRealisedComponent } from './components/payment-realised/payment-realised.component';
import { HomeComponent } from './components/home/home.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserOrderListComponent } from './components/user-order-list/user-order-list.component';
import { UserOrderProductListComponent } from './components/user-order-product-list/user-order-product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProgressSpinnerDialogComponent,
    AdminNavigationComponent,
    ProductListComponent,
    ProductComponent,
    BasketComponent,
    PaymentComponent,
    OrderListComponent,
    OrderProductListComponent,
    ProductAddComponent,
    ProductAddedComponent,
    UserProfileComponent,
    PaymentRealisedComponent,
    HomeComponent,
    UsersListComponent,
    UserOrderListComponent,
    UserOrderProductListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    FlexModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi : true}, AuthService, TokenStorage, BasketService, ProductService, UserService, OrderService, CategoryService, BrandService, PictureService],
  bootstrap: [AppComponent],
  entryComponents: [
    ProgressSpinnerDialogComponent
  ]
})
export class AppModule { }
