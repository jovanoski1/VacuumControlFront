import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { PermissionCheckPipe } from './pipes/permission-check.pipe';
import { SearchVacuumComponent } from './search-vacuum/search-vacuum.component';
import { CreateVacuumComponent } from './create-vacuum/create-vacuum.component';
import { ErrorMessagesComponent } from './error-messages/error-messages.component';
import { VacuumCleanerComponent } from './vacuum-cleaner/vacuum-cleaner.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    CreateComponent,
    UpdateComponent,
    PermissionCheckPipe,
    SearchVacuumComponent,
    CreateVacuumComponent,
    ErrorMessagesComponent,
    VacuumCleanerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
