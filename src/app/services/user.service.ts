import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser, User } from '../model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]>{
    return this.http.get<User[]>('http://localhost:8080/users',{
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
      }
    });
  }

  public createUser(user: NewUser): Observable<User> {
    return this.http.post<User>('http://localhost:8080/users', user,{
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
      }
    });
  }

}
