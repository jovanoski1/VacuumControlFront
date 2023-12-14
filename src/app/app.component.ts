import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UserManagementFront';
  isCreateLinkVisible(): boolean {
    return localStorage.getItem('canCreateUsers') === 'true';
  }

  constructor(private router: Router) {}
  logout(){
    localStorage.removeItem('jwt');
    localStorage.removeItem('canReadUsers');
    localStorage.removeItem('canCreateUsers');
    localStorage.removeItem('canDeleteUsers');
    localStorage.removeItem('canUpdateUsers');
    this.router.navigate(['']);
  }
}
