import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;

    constructor(private loginService: LoginService) {
      this.email = '';
      this.password = '';
    }

    login() {
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      this.loginService.login(this.email, this.password);
  }
}
