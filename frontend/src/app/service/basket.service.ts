import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ProductDTO } from '../model/product.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BasketService {

    private basketSource = new BehaviorSubject<ProductDTO[]>([]);
  
    currentBasket: Observable<ProductDTO[]> = this.basketSource.asObservable();
  
    constructor(private http: HttpClient) {}
  
    public addToBasket(products: ProductDTO[]) {
      this.basketSource.next(products);
    }

    public clearBasket(): void {
      this.basketSource.next([]);
    }

}