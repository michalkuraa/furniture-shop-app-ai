import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDTO, AddProductDTO } from '../model/product.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProductService {

    productUrl = 'http://localhost:8080/products'

    constructor(private httpClient: HttpClient) {}

    public findAllProducts(): Observable<ProductDTO[]> {
        return this.httpClient.get<ProductDTO[]>(this.productUrl);
    }

    public addProduct(product: AddProductDTO): Observable<ProductDTO> {
        return this.httpClient.post<ProductDTO>(this.productUrl + "/add", product);
    }

}