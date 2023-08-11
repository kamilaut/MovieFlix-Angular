import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';

const routes: Routes = [{ path: 'register', component: UserRegistrationFormComponent },
{ path: 'login', component: UserLoginFormComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    MatDialogModule],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
