import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { UpdateUser, User, Role } from '../model';
import { RoleService } from '../services/role.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
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

  constructor(private route: Router, public roleService: RoleService,private userService: UserService) {
    // console.log('User:', this.route.snapshot?.data?.['user']);
  }

  ngOnInit(): void {
    console.log('User:', this.userService.selectedUser);
    this.user.firstName = this.userService.selectedUser?.firstName as string;
    this.user.lastName = this.userService.selectedUser?.lastName as string;
    this.user.email = this.userService.selectedUser?.email as string;
    this.user.permissions = this.userService.selectedUser?.permissions as Role[];
    // this.user.can_create_users = this.userService.selectedUser?.permissions.some(role => role.role == 'can_create_users') as boolean;
    // this.user.can_read_users = this.userService.selectedUser?.permissions.some(role => role.role == 'can_read_users') as boolean;
    // this.user.can_update_users = this.userService.selectedUser?.permissions.some(role => role.role == 'can_update_users') as boolean;
    // this.user.can_delete_users = this.userService.selectedUser?.permissions.some(role => role.role == 'can_delete_users') as boolean;
  }

  onSubmit() {
    const newUser: UpdateUser = {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      permissions: this.user.permissions,
    };
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

  checkPermission(role: Role): boolean {
    return this.user.permissions.some(userRole => userRole.role === role.role);
  }

  togglePermission(event: any, role: Role): void {

    const existingRoleIndex = this.user.permissions.findIndex(userRole => userRole.role === role.role);
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
