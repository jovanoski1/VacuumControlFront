import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorMessage } from '../model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {

  constructor(private http:HttpClient) { }

  public getErrors(): Observable<ErrorMessage[]>{
    return this.http.get<ErrorMessage[]>('http://localhost:8080/errors',{
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
      }
    });
  }
}
