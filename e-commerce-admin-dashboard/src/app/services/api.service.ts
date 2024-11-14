import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  login(username: string, password: string) {
    return this.http.post('https://fakestoreapi.com/auth/login', { username, password }).pipe(
      catchError(this.handleError)
    );
  }

  getProducts() {
    return this.http.get('https://fakestoreapi.com/products').pipe(
      catchError(this.handleError)
    );
  }

  getProductById(id: number) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  addProduct(product: any) {
    return this.http.post('https://fakestoreapi.com/products', product).pipe(
      catchError(this.handleError)
    );
  }

  updateProduct(id: number, product: any) {
    return this.http.put(`https://fakestoreapi.com/products/${id}`, product).pipe(
      catchError(this.handleError)
    );
  }

  deleteProduct(id: number) {
    return this.http.delete(`https://fakestoreapi.com/products/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  getUsers() {
    return this.http.get('https://fakestoreapi.com/users').pipe(
      catchError(this.handleError)
    );
  }
}
