import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { CreateComponent } from './create/create.component';
import { createAuthGuard } from './guards/create-auth.guard';
import { readAuthGuard } from './guards/read-auth.guard';
import { UpdateComponent } from './update/update.component';
import { updateAuthGuard } from './guards/update-auth.guard';
import { SearchVacuumComponent } from './search-vacuum/search-vacuum.component';
import { CreateVacuumComponent } from './create-vacuum/create-vacuum.component';
import { ErrorMessagesComponent } from './error-messages/error-messages.component';
import { searchVaccumGuard } from './guards/search-vaccum.guard';
import { createVacuumGuard } from './guards/create-vacuum.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [readAuthGuard]
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
  },
  {
    path: 'search-vacuum',
    component: SearchVacuumComponent,
    canActivate: [searchVaccumGuard]
  },
  {
    path: 'create-vacuum',
    component: CreateVacuumComponent,
    canActivate: [createVacuumGuard]
  },
  {
    path: 'errors',
    component: ErrorMessagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
