import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { UpdateUser, User } from '../model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    can_create_users: false,
    can_read_users: false,
    can_update_users: false,
    can_delete_users: false
  };

  constructor(private route: Router, private userService: UserService) {
    // console.log('User:', this.route.snapshot?.data?.['user']);
  }

  ngOnInit(): void {
    console.log('User:', this.userService.selectedUser);
    this.user.firstName = this.userService.selectedUser?.firstName as string;
    this.user.lastName = this.userService.selectedUser?.lastName as string;
    this.user.email = this.userService.selectedUser?.email as string;
    this.user.can_create_users = this.userService.selectedUser?.authorities.includes('can_create_users') as boolean;
    this.user.can_read_users = this.userService.selectedUser?.authorities.includes('can_read_users') as boolean;
    this.user.can_update_users = this.userService.selectedUser?.authorities.includes('can_update_users') as boolean;
    this.user.can_delete_users = this.userService.selectedUser?.authorities.includes('can_delete_users') as boolean;
  }

  onSubmit() {
    const newUser: UpdateUser = {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      authorities: ''
    };

    if (this.user.can_create_users) {
      newUser.authorities+=('can_create_users');
    }
  
    if (this.user.can_read_users) {
      newUser.authorities+=(',can_read_users');
    }
  
    if (this.user.can_update_users) {
      newUser.authorities+=(',can_update_users');
    }
  
    if (this.user.can_delete_users) {
      newUser.authorities+=(',can_delete_users');
    }
    if(newUser.authorities.charAt(0)==','){
      newUser.authorities=newUser.authorities.substring(1);
    }

    this.userService.updateUser(newUser).subscribe({
      next: (result: User) => {
        // console.log('User created:', result);
        alert('User updated!');
        this.route.navigate(['/users']);
      },
      error: (error: any) => {
        console.log('Error:', error);
        let errorMsg = '';
        if(error.error.firstName){
          errorMsg+=error.error.firstName+'\n';
        }
        if(error.error.lastName){
          errorMsg+=error.error.lastName+'\n';
        }
        if(error.error.email){
          errorMsg+=error.error.email+'\n';
        }
        if(error.error.password){
          errorMsg+=error.error.password+'\n';
        }
        alert(errorMsg);
      }
    });
  }
}
