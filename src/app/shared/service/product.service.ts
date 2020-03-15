import { Injectable } from '@angular/core';
import { IProduct } from '../models/IProduct';
import { HttpClient, HttpErrorResponse,  } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import {throwError as observableThrowError,  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private _Producturl: string = "http://localhost:8090/api/v1/products";
  getProduct():Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this._Producturl).pipe(tap(data =>
      console.log('productService', data)), catchError(this.errorHandler));
  }
  // getAll(slug): Observable<Comment[]> {
  //   return this.apiService.get(`/articles/${slug}/comments`)
  //          .map(data => data.comments);
  // }

  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error");
  }
}
