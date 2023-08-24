import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  user: any;
  birthday: any;
  favoriteMovies: any[] = [];
  editMode = false;
  editedUser: any = {};

  constructor(
    private fetchApiData: FetchApiDataService, 
    private router: Router,
    private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    const userName = localStorage.getItem('user');
    if (userName) {
      this.fetchApiData.getOneuser(userName).subscribe((response: any) => {
        this.user = response;
        this.user.Birthday = this.user.Birthday.substring(0, 10);
        this.editedUser = { ...this.user };
        this.editedUser.Password = "";
        console.log('User Profile:', this.user);
        this.fetchApiData.getAllMovies().subscribe((moviesResponse: any) => {
          this.favoriteMovies = [];  
          this.favoriteMovies = moviesResponse.filter((movie: any) =>
            this.user.FavoriteMovies.includes(movie._id)
          );
        });
      });
    }
  }

  saveChanges(): void {
      this.fetchApiData
      .editUser(this.user.Username, this.editedUser)
      .subscribe((response: any) => {
        this.user = response;
        this.user.Birthday = this.user.Birthday.substring(0, 10);
        this.editedUser = { ...this.user };
        this.editedUser.Password = "";
        this.editMode = false;
        localStorage.setItem('user', response.Username);
      });
    }
    
    deleteUserAccount(): void {
      this.fetchApiData.deleteUser(this.user.Username)
      .subscribe((response: any) => {
        this.snackBar.open('Your account has been deleted.', 'OK', { duration: 5000 });
        this.router.navigate(['/']);
        localStorage.clear();
        this.user = null;
        this.editedUser = null;
      });
    }

  goBack(): void {
    this.router.navigate(['/movies']); 
  }

  removeFromFavorites(movieId: string): void {
    const userName = localStorage.getItem('user');
    if (userName) {
      this.fetchApiData.deleteMovieFromFavorites(userName, movieId).subscribe(() => {
        this.favoriteMovies = this.favoriteMovies.filter((movie) => movie._id !== movieId);
      });
    }
  }
}
