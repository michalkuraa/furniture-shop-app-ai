import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryDTO } from '../model/category.model';
import { BrandDTO } from '../model/brand.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BrandService {

    brandUrl = 'http://localhost:8080/brands'

    constructor(private httpClient: HttpClient) {}

    public findAllBrands(): Observable<BrandDTO[]> {
        return this.httpClient.get<BrandDTO[]>(this.brandUrl);
    }

}