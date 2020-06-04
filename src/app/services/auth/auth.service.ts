import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, Subject, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {AuthResponse} from '../../utils/interfaces';
import {SERVER_URL} from '../../utils/constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // loginError$: Subject<string> = new Subject<string>();
  constructor(private http: HttpClient) {
  }

  get token(): string {
    const expDate = new Date(localStorage.getItem('token-exp'));
    if (new Date() > expDate) {
      this.logout();
      return null;
    }
    return localStorage.getItem('token');
  }

  login(account: any): Observable<any> {
    return this.http.post(SERVER_URL + 'login', account)
      .pipe(
        tap(this.setToken),
        // catchError(this.handleLoginError.bind(this))
      );
  }

  // private handleLoginError(error: HttpErrorResponse){
  //   console.log(error);
  //   this.loginError$.next('wrong data');
  //   return throwError(error);
  // }

  private setToken(response: AuthResponse | null) {
    if (response) {
      const expDate = new Date(new Date().getTime() + +response.expiresIn);
      localStorage.setItem('token', response.token);
      localStorage.setItem('token-exp', expDate.toString());
    } else {
      localStorage.clear();
    }
  }

  registration(account: Account): Observable<any> {
    return this.http.post(SERVER_URL + 'acc/create', account);
  }

  logout() {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }
}
