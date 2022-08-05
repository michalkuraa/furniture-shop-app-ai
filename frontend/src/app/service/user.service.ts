import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserDTO } from '../model/user.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

    userUrl = 'http://localhost:8080/users';

    private userIdSource = new BehaviorSubject<number>(-1);
  
    currentUserId: Observable<number> = this.userIdSource.asObservable();

    constructor(private httpClient: HttpClient) {}

    public changeUserId(id: number) {
        this.userIdSource.next(id);
    }

    public getCurrentUserInfo(): Observable<UserDTO>{
        return this.httpClient.get<UserDTO>(this.userUrl + '/current');
    }

    public getAllUsers(): Observable<UserDTO[]> {
        return this.httpClient.get<UserDTO[]>(this.userUrl + "/all");
    }

}