import { Component, OnInit } from '@angular/core';
import { UserLoginFormComponent } from '../user-login-form/user-login-form.component';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';
import { MatDialog } from '@angular/material/dialog';

/**
 * @component
 * @description
 * This component is the selector for the welcome page of the application.
 * It includes the templates and styles for the welcome page.
 */
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
   /**
   * @constructor
   * @description
   * The constructor initializes the MatDialog.
   * @param {MatDialog} dialog - The dialog component from Angular Material.
   */
  constructor (public dialog: MatDialog) { }
  
  /**
   * @method ngOnInit
   * @description
   * A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
   */
ngOnInit(): void {
}

  /**
   * @method openRegistrationDialog
   * @description
   * This method opens the registration dialog with a specified width.
   */
openRegistrationDialog(): void {
  this.dialog.open(UserRegistrationFormComponent,{
    width:'280px'
  });
  
  /**
   * @method openUserLoginDialog
   * @description
   * This method opens the user login dialog with a specified width.
   */

}
openUserLoginDialog(): void {
this.dialog.open(UserLoginFormComponent,{
  width:'280px'
});
}

}
