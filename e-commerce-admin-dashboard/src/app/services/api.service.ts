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
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>('https://fakestoreapi.com/products').pipe(
      catchError(this.handleError)
    );
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`https://fakestoreapi.com/products/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  addProduct(product: any): Observable<any> {
    return this.http.post<any>('https://fakestoreapi.com/products', product).pipe(
      catchError(this.handleError)
    );
  }

  updateProduct(id: number, product: any): Observable<any> {
    return this.http.put<any>(`https://fakestoreapi.com/products/${id}`, product).pipe(
      catchError(this.handleError)
    );
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`https://fakestoreapi.com/products/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>('https://fakestoreapi.com/auth/login', { username, password }).pipe(
      catchError(this.handleError)
    );
  }
  register(username: string, password: string, email: string): Observable<any> { 
    return this.http.post<any>('https://fakestoreapi.com/users', { username, password, email }).pipe( 
      catchError(this.handleError) ); }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>('https://fakestoreapi.com/users').pipe(
      catchError(this.handleError)
    );
  }
}
