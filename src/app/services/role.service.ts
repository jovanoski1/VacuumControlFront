import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from '../model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  public allRoles: Role[] = [];

  constructor(private http: HttpClient) { }


  public getRoles(): Observable<Role[]>{
    return this.http.get<Role[]>('http://localhost:8080/roles',{
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
      }
    });
  }
}
