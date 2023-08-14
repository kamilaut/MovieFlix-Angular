import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [{ path: 'register', component: UserRegistrationFormComponent },
{ path: 'login', component: UserLoginFormComponent },
{ path: '', component: WelcomePageComponent },
{ path: 'movies', component: MovieCardComponent },
{ path: 'profile', component: UserProfileComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    MatDialogModule],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
