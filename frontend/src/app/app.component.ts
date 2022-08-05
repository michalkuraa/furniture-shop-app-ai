import { Component, OnInit } from '@angular/core';
import { TokenStorage } from './core/token.storage';
import { BasketService } from './service/basket.service';
import { BasketDTO } from './model/basket.model';
import { ProductDTO } from './model/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loggedIn: boolean = false;
  username: string = '';
  roles: string[] = [];
  isAdmin: boolean = false;
  isEmployee: boolean = false;
  basket: ProductDTO[];

  constructor(private tokenStorage: TokenStorage, private basketService: BasketService, private router: Router) {
  }

  ngOnInit() {
    if (this.tokenStorage.isUserSignedIn() === true) {
      this.loggedIn = true;
      this.username = this.tokenStorage.getUsername();
      this.roles = this.tokenStorage.getAuthorities();
      this.refreshBasketInfo();
      if (this.roles.includes("ROLE_ADMIN")) {
        this.isAdmin = true;
      }
    }
  }

  refreshBasketInfo(): void {
    this.basketService.currentBasket.subscribe(basket => {
      this.basket = basket;
    });
  }


  signOut() {
    this.tokenStorage.signOut();
    this.router.navigate(['/']).then(() => this.tokenStorage.reloadPage());
  }

}
