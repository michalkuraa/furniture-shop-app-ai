import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PictureDTO } from '../model/picture.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PictureService {

    pictureUrl = 'http://localhost:8080/pictures'

    constructor(private httpClient: HttpClient) {}

    public uploadPicture(file: any, id: number): Observable<PictureDTO>{
        return this.httpClient.post<PictureDTO>(this.pictureUrl + "/upload/" + id, file);
    }


}