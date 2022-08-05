import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthService {

  appUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<any> {
    const credentials = {username: username, password: password};
    const options = {responseType: 'text' as 'json'}
    return this.http.post<any>(this.appUrl + "login", credentials).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(err.error.message);
      })
    )
  }

  register(username: string, password: string, name: string, surname: string, email: string, pesel: string, birthdate: Date,
    city: string, postcode: number, street: string, streetNumber: number, localNumber: number, roles: string[]): Observable<any> {
      const signUpForm = {username: username, password: password, name: name, surname: surname, email: email, pesel: pesel, birthdate: birthdate, 
       city: city, postcode: postcode, street: street, streetNumber: streetNumber, localNumber: localNumber, roles: roles}
      const options = {responseType: 'text' as 'json'}
      return this.http.post<any>(this.appUrl + "register", signUpForm).pipe(
        catchError((err: HttpErrorResponse) => {  
          return throwError(err.error.message);
        })
      )
    }


}