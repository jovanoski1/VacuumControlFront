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

  public normalOperation(id: number, operation: String): Observable<number>{
    return this.http.get<number>('http://localhost:8080/cleaners/'+operation +'/'+id,{
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
      }
    });
  }

  public scheduleOperation(id: number, operation: string, date: Date): Observable<boolean>{
    return this.http.post<boolean>('http://localhost:8080/cleaners/schedule'+this.capitalizeFirstLetter(operation), {
      id: id,
      dateTime: date
    } ,{
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
      }
    });
  }

  public remove(cleaner: VacuumCleaner): Observable<any> {
    return this.http.delete('http://localhost:8080/cleaners/remove/' + cleaner.id,{
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
      }
    });
  }

  capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

}
