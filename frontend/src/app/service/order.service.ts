import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { BasketDTO } from '../model/basket.model';
import { OrderDTO } from '../model/order.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class OrderService {

    ordersUrl = 'http://localhost:8080/orders'


    private orderIdSource = new BehaviorSubject<number>(-1);
  
    currentOrderId: Observable<number> = this.orderIdSource.asObservable();

    constructor(private httpClient: HttpClient) {}

    public changeOrderId(id: number) {
        this.orderIdSource.next(id);
    }

    public createOrder(basket: BasketDTO) {
        return this.httpClient.post<BasketDTO>(this.ordersUrl, basket);
    }

    public findAllOrdersOfCurrentUser(): Observable<OrderDTO[]> { 
        return this.httpClient.get<OrderDTO[]>(this.ordersUrl);
    }

    public findAllOrdersOfUser(id: number): Observable<OrderDTO[]> { 
        return this.httpClient.get<OrderDTO[]>(this.ordersUrl + "/users/" + id);
    }

    public findOrdersById(id: number): Observable<OrderDTO> {
        return this.httpClient.get<OrderDTO>(this.ordersUrl + "/" + id);
    }

}