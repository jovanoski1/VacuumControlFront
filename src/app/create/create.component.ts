import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { NewUser, User } from '../model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    can_create_users: false,
    can_read_users: false,
    can_update_users: false,
    can_delete_users: false
  };

  constructor(private userService: UserService) { }

  onSubmit() {
    const newUser: NewUser = {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      password: this.user.password,
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

    this.userService.createUser(newUser).subscribe({
      next: (result: User) => {
        console.log('User created:', result);
        alert('User created');
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
