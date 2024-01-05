import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { CreateComponent } from './create/create.component';
import { createAuthGuard } from './create-auth.guard';
import { readAuthGuard } from './read-auth.guard';
import { UpdateComponent } from './update/update.component';
import { updateAuthGuard } from './update-auth.guard';
import { SearchVacuumComponent } from './search-vacuum/search-vacuum.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
    // canActivate: [readAuthGuard]
  },
  {
    path: 'create',
    component: CreateComponent,
    canActivate: [createAuthGuard]
  },
  {
    path: 'update',
    component: UpdateComponent,
    canActivate: [updateAuthGuard]
    // data: { user: "prokic" }
  },
  {
    path: 'search-vacuum',
    component: SearchVacuumComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
