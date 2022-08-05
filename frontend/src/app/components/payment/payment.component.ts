import { Component, OnInit, NgZone, Input } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { BasketDTO } from 'src/app/model/basket.model';
import { OrderService } from 'src/app/service/order.service';
import { BasketService } from 'src/app/service/basket.service';

declare let paypal: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  @Input()
  basket: BasketDTO;

  @Input()
  sum: number;

  constructor(private basketService: BasketService, private orderService: OrderService, private router: Router, private ngZone: NgZone) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    let router = this.router;
    let ngZone = this.ngZone;
    let basketService = this.basketService;
    let currentBasket: BasketDTO = this.basket;
    let orderService: OrderService = this.orderService;
    let cost: number = this.sum;

    this.loadExternalScript("https://www.paypalobjects.com/api/checkout.js").then(() => {
      paypal.Button.render({
        env: 'sandbox',
        client: {
          sandbox: 'AdY_e7pvSxjVxlmd2M5y_whqlxg59RFHJ8iJI1gdlENTW5k5S_vDbaGppmid6HPg5XpRAlszFNYXKOmC'
        },
        commit: true,
        payment: function (data, actions) {
          return actions.payment.create({
            payment: {
              transactions: [
                {
                  amount: { total: cost, currency: 'PLN' }
                }
              ]
            }
          })
        },
        onAuthorize: function(data, actions) {
          return actions.payment.execute().then(function(payment) {
            console.log(currentBasket);
            orderService.createOrder(currentBasket).subscribe(data => {
              ngZone.run(() => router.navigate(['/payment-realised'])).then(() => {
                basketService.clearBasket();
              })
            })
          })
        }
      }, '#paypal-button');
    });
  }

  private loadExternalScript(scriptUrl: string) {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script')
      scriptElement.src = scriptUrl
      scriptElement.onload = resolve
      document.body.appendChild(scriptElement)
  })}

}
