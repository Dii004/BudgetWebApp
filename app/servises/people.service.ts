import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse, HttpEvent, HttpRequest } from '@angular/common/http';
import { People } from '../models/people';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PeopleService  {
 private peopleUrl = 'api/peoples'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private httpClient: HttpClient) { }

  public getPeople(): Observable <any>{ 
    return this.httpClient.get<any>(this.peopleUrl);
}

  editPeople(people: People): Observable <any> {
    return this.httpClient.put(this.peopleUrl, people, this.httpOptions);
  }



  
}
