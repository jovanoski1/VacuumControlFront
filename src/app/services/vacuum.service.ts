import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterVacuumCleaner, VacuumCleaner } from '../model';

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

  public filterVacuum(filterVacuumCleaner: FilterVacuumCleaner): Observable<VacuumCleaner[]>{
    return this.http.post<VacuumCleaner[]>('http://localhost:8080/cleaners/filter', filterVacuumCleaner, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
      }
    });
  }

  public createVacuun(name: string): Observable<VacuumCleaner>{
    return this.http.get<VacuumCleaner>('http://localhost:8080/cleaners/'+name,{
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
      }
    });
  }

}
