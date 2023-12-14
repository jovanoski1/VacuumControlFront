import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: User[] = [];
  hasPermission = false;

  constructor(private userService: UserService, private router: Router) { }

  redirectToUserDetails(user: User) {
    this.userService.selectedUser = user;
    this.router.navigate(['/update']);
  }

  enableClick(): boolean {
    return localStorage.getItem('canUpdateUsers') === 'true';
  }

  ngOnInit(): void {
    this.hasPermission = localStorage.getItem('canReadUsers') === 'true';
    this.userService.getUsers().subscribe({
      next: (result: User[]) => {
        this.users = result;
      },
      error: (error: any) => {
        console.log('Error:', error);
      }
    })
  }
}
