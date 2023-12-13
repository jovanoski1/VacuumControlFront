import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UserManagementFront';

  logout(){
    localStorage.removeItem('jwt');
    localStorage.removeItem('canReadUsers');
    localStorage.removeItem('canCreateUsers');
    localStorage.removeItem('canDeleteUsers');
    localStorage.removeItem('canUpdateUsers')
  }
}
