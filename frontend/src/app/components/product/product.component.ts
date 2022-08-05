import { Component, OnInit, Input } from '@angular/core';
import { ProductDTO } from 'src/app/model/product.model';
import { TokenStorage } from 'src/app/core/token.storage';
import { BasketService } from 'src/app/service/basket.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  @Input()
  product: ProductDTO;
  basket: ProductDTO[];
  basketLoaded: Promise<boolean>
  panelOpenState = false;
  loggedOff: boolean = true;

  constructor(private tokenStorage: TokenStorage, private basketService: BasketService, private snackbar: MatSnackBar, public router: Router) { }

  ngOnInit() {
    if (this.tokenStorage.isUserSignedIn()) {
      this.loggedOff = false;
      this.refreshBasketInfo();
    }
  }

  refreshBasketInfo(): void {
    this.basketService.currentBasket.subscribe(basket => {
      this.basket = basket;
      this.basketLoaded = Promise.resolve(true);
    });
  }


  addToBasket(product: ProductDTO): void {
    this.basket.push(product);
    this.showSnackbar("Produkt dodany do koszyka", "OK");
    this.basketService.addToBasket(this.basket);
  }

  showSnackbar(message: string, action: string): void {
    this.snackbar.open(message, action, {
      duration: 3000,
    });
  }

  togglePanel() {
    this.panelOpenState = !this.panelOpenState;
  }

  removeFromBasket(product: ProductDTO): void {
    for (var i=0; i<this.basket.length; i++) {
      if (this.basket[i] === product) {
        this.basket.splice(i, 1);
      }
    }
    this.basketService.addToBasket(this.basket);
    this.refreshBasketInfo();
  }

}
