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
export class UserLoginFormComponent implements OnInit {

  loginData = { Username: '', Password: '' };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {}

  loginUser(): void {
    this.fetchApiData.userLogin(this.loginData).subscribe(
      (response) => {
        // Logic for a successful login goes here (to be implemented)
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