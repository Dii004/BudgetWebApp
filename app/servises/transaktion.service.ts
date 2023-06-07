import { Injectable } from '@angular/core';
import { Transaktion} from '../models/transaktion';
import { Observable, throwError } from 'rxjs';
import { HttpClient,HttpHeaders, HttpErrorResponse, HttpEvent, HttpRequest } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class TransaktionService {
  private transaktionUrl = 'api/transaktions'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  public getTransaktions(): Observable <any>{ 
    return this.httpClient.get<any>(this.transaktionUrl);
}
  public createTransaktion(transaktion: Transaktion): Observable<any> {
    return this.httpClient.post(this.transaktionUrl, transaktion, this.httpOptions)
  }
}
