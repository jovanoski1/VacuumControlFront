import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { NewUser, User, Role } from '../model';
import { RoleService } from '../services/role.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    permissions: Role[];
  } = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    permissions: [],
  };

  constructor(private userService: UserService, public roleService: RoleService) { }

  onSubmit() {
    const newUser: NewUser = {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      password: this.user.password,
      permissions: this.user.permissions,
    };

    console.log(newUser);


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

  checkPermission(role: Role): boolean {
    return this.user.permissions.some(userRole => userRole.role === role.role);
  }

  togglePermission(event: any, role: Role): void {
    const existingRoleIndex = this.user.permissions.findIndex(userRole => userRole.role === role.role);
    console.log('Existing role index:', event);
    if (event) {
      if (existingRoleIndex === -1) {
        this.user.permissions.push(role);
      }
    } else {
      if (existingRoleIndex !== -1) {
        this.user.permissions.splice(existingRoleIndex, 1);
      }
    }
  }

}
