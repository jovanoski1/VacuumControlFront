import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VacuumCleaner } from '../model';

@Injectable({
  providedIn: 'root'
})
export class VacuumService {

  constructor(private http:HttpClient) { }

  public getAllVacuum(): Observable<VacuumCleaner[]>{
    return this.http.get<VacuumCleaner[]>('http://localhost:8080/cleaners',{
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
      }
    });
  }
}
