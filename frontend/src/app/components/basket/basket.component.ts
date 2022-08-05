import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductDTO } from 'src/app/model/product.model';
import { BasketService } from 'src/app/service/basket.service';
import { UserService } from 'src/app/service/user.service';
import { AddressDTO } from 'src/app/model/address.model';
import { UserDTO } from 'src/app/model/user.model';
import { BasketDTO } from 'src/app/model/basket.model';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  isLinear: boolean = false;
  myFormGroup: FormGroup;
  basket: ProductDTO[];
  address: AddressDTO;
  user: UserDTO;
  order: BasketDTO;
  paymentVisible: boolean = false;
  

  constructor(private _formBuilder: FormBuilder, private basketService: BasketService, private userService: UserService, private orderService: OrderService) { }

  ngOnInit() {
    this.refreshBasketInfo();
    this.myFormGroup = this._formBuilder.group({
      cityCtrl: ['', Validators.required],
      postcodeCtrl: ['', Validators.required],
      streetCtrl: ['', Validators.required],
      streetNumberCtrl: ['', Validators.required],
      localNumberCtrl: ['', Validators.required],
    });
    this.address = {
      city: "",
      postcode: "",
      street: "",
      streetNumber: 0,
      localNumber: 0
    }
    this.getUserAddressInfo();
  }

  refreshBasketInfo(): void {
    this.basketService.currentBasket.subscribe(basket => {
      this.basket = basket;
    });
  }

  getUserAddressInfo(): void {
    this.userService.getCurrentUserInfo().subscribe(user => {
      this.user = user;
      this.address = {
        city: this.user.city,
        postcode: this.user.postcode,
        street: this.user.street,
        streetNumber: this.user.streetNumber,
        localNumber: this.user.localNumber
      }
    })
  }

  createOrder(): void {
    this.order = {
      products: this.basket,
      address: this.address
    }
  }

  countSum(): string {
    let sum: number = 0;

    this.basket.forEach(product => {
      sum += product.price;
    });

    return sum.toFixed(2);
  }

  makeItVisible(): void {
    this.paymentVisible = true;
  }

  clearBasket(): void {
    this.basketService.clearBasket();
  }



}
