import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IPerson } from './IPerson';
import {throwError as observableThrowError,  Observable } from 'rxjs';
// import { tap, catchError } from 'rxjs/operators';
import {tap, catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) {}

  private _url: string = "http://localhost:8085/person/getAllPerson";
  getPerson(): Observable<IPerson[]>{
    return this.http.get<IPerson[]>(this._url).
    pipe(tap(data =>
      console.log('detailsService', data)), catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error");
  }

}
