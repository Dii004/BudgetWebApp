import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse, HttpEvent, HttpRequest } from '@angular/common/http';
import { People } from '../models/people';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Transaktion} from '../models/transaktion';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private baseUrl = 'http://localhost:8080';

  constructor(private httpClient:HttpClient) { }

  upload(file: File): Observable<HttpEvent <any>> {
    const formData: FormData = new FormData();
 
    formData.append('file', file);
    console.log(formData);
    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json',
    });
    
  return this.httpClient.request(req);
}

  getFiles(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/files`);
  }


}
