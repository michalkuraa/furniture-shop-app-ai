import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryDTO } from '../model/category.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CategoryService {

    categoryUrl = 'http://localhost:8080/categories'

    constructor(private httpClient: HttpClient) {}

    public findAllCategories(): Observable<CategoryDTO[]> {
        return this.httpClient.get<CategoryDTO[]>(this.categoryUrl);
    }

}