import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) { return this.http.post('https://fakestoreapi.com/auth/login',
    { username, password }).pipe( catchError(error => { console.error('Login error:', error); return throwError(error); }) ); }

  // Get Products method
  getProducts() {
    return this.http.get('https://fakestoreapi.com/products').pipe(
      catchError(error => {
        console.error('Error fetching products:', error);
        return throwError(error);
      })
    );
  }
}
