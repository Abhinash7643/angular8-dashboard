import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // private setHeaders(): HttpHeaders {
  //   const headersConfig = {
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json'
  //   };

  //   if (this.jwtService.getToken()) {
  //     headersConfig['Authorization'] = `Token ${this.jwtService.getToken()}`;
  //   }
  //   return new HttpHeaders(headersConfig);
  // }

  // get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
  //   return this.http.get(`${environment.api_url}${path}`, { headers: this.setHeaders(), search: params })
  //   .catch(this.formatErrors)
  //   .map((res: Response) => res.json());
  // }
}
