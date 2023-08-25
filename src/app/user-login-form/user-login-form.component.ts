import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
/**
 * UserLoginFormComponent is a component that handles user login.
 * 
 * @selector app-user-login-form
 * @templateUrl ./user-login-form.component.html
 * @styleUrls ['./user-login-form.component.scss']
 */
export class UserLoginFormComponent implements OnInit {

  /**
   * An object to hold the login data entered by the user.
   */
  loginData = { Username: '', Password: '' };
/**
   * @param fetchApiData Service to fetch API data.
   * @param dialogRef Reference to the dialog opened.
   * @param snackBar Reference to the snack bar service.
   * @param router Reference to the router service.
   */
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar,
    private router: Router
  ) {}
/**
   * A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
   */
  ngOnInit(): void {}
 
  /**
   * Method to login the user.
   * On successful login, it stores the user and token in local storage, closes the dialog, shows a success message and navigates to 'movies'.
   * On failure, it shows an error message.
   */
  loginUser(): void {
  this.fetchApiData.userLogin(this.loginData).subscribe(
    (response) => {
      localStorage.setItem('user', response.user.Username );
      localStorage.setItem('token', response.token);
      this.dialogRef.close();
      this.snackBar.open('User Login successful', 'Ok', {
        duration:2000
      })
      this.router.navigate(['movies']);
    },
    (_response): void => {
      this.snackBar.open('User Login failed', 'OK', {
        duration: 2000
      });
    }
  );
}
}