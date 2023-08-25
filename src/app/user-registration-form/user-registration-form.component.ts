import { Component, OnInit, Input } from '@angular/core';
// You'll use this import to close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';
// This import brings in the API calls we created in 6.2
import { FetchApiDataService } from '../fetch-api-data.service';
// This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

/**
 * UserRegistrationFormComponent is a component responsible for handling user registration.
 * 
 * @selector app-user-registration-form
 * @templateUrl ./user-registration-form.component.html
 * @styleUrls ['./user-registration-form.component.scss']
 */

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss']
})
export class UserRegistrationFormComponent implements OnInit {
/**
   * @Input() userData - An object that holds the user data entered in the registration form.
   */
  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };
 /**
   * Constructor for the UserRegistrationFormComponent.
   * 
   * @param fetchApiData - Service for making API calls.
   * @param dialogRef - Reference to the dialog opened.
   * @param snackBar - Service for opening snackbars.
   * @param router - Angular's Router.
   */
constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar,
    private router: Router) 
    { }
 /**
   * Angular's OnInit lifecycle hook.
   */
ngOnInit(): void {
}

  /**
   * registerUser() is a method responsible for sending the form inputs to the backend.
   * On successful registration, it closes the dialog, navigates to the root URL, and opens a snackbar with a success message.
   * On failure, it opens a snackbar with an error message.
   */
  
// This is the function responsible for sending the form inputs to the backend
registerUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe((result) => {
  // Logic for a successful user registration goes here! (To be implemented)
     this.dialogRef.close(); // This will close the modal on success!
     console.log(result);
     this.router.navigate(['/']);
     this.snackBar.open(result, 'Something meaningful', {
        duration: 2000
     });
    }, (result) => {
      console.log(result);
      this.snackBar.open(result, 'Not today', {
        duration: 2000
      });
    });
  }

  }
