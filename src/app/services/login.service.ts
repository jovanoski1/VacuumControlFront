import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public login(email: string, password: string){
    this.http.post('http://localhost:8080/auth/login', { 
      email: email, 
      password: password 
    }).subscribe({
      next: (response: any) => {
        // console.log('Success:', response);
        localStorage.setItem('jwt', response['jwt']);
        localStorage.setItem('canReadUsers', response['canReadUsers']);
        localStorage.setItem('canCreateUsers', response['canCreateUsers']);
        localStorage.setItem('canUpdateUsers', response['canUpdateUsers']);
        localStorage.setItem('canDeleteUsers', response['canDeleteUsers']);

      },
      error: (error: any) => {
        console.log('Error:', error);
        // Handle error from the backend here
      }
    });
  }
}
