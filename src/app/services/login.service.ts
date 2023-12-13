import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) { }

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
        this.router.navigate(['/users']);

        if(response['canReadUsers'] === false && response['canCreateUsers'] === false 
        && response['canUpdateUsers'] === false && response['canDeleteUsers'] === false){
          alert('You do not have any permissions to access this page!');
          console.log('usao');
        }
      },
      error: (error: any) => {
        console.log('Error:', error);
        // Handle error from the backend here
      }
    });
  }
}
