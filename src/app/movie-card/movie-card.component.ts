import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MovieDetailsDialogComponent } from '../movie-details-dialog/movie-details-dialog.component';
/**
 * MovieCardComponent is a component that handles the display and interaction with movie cards.
 * 
 * @remarks
 * This component fetches movie data from an API, allows the user to view movie details, and add or remove movies from their favorites.
 * 
 * @selector 'app-movie-card'
 * @templateUrl './movie-card.component.html'
 * @styleUrls ['./movie-card.component.scss']
 */
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
    /**
   * An array to store the movies fetched from the API.
   */
  movies: any[] = [];
  
  /**
   * An array to store the IDs of the user's favorite movies.
   */
  favoriteMoviesIDs: any[] = [];

  /**
   * @param fetchApiData - Service for fetching data from the API.
   * @param dialog - Service for opening dialogs.
   */
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog
  ) {}

  /**
   * Fetches the movies and the user's favorite movies when the component is initialized.
   */
  ngOnInit(): void {
    this.getMovies();
    this.getFavoriteMovies();
  }
   
  /**
   * Fetches the user's favorite movies from the API.
   */
  getFavoriteMovies(): void {
    const userName = localStorage.getItem('user');
    if (userName){
      this.fetchApiData.getOneuser(userName).subscribe((response: any) => {
        this.favoriteMoviesIDs = response.FavoriteMovies;
      })
    
  /**
   * Fetches all movies from the API.
   */
    }
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
    });
    
  /**
   * Opens a dialog to display movie details.
   * 
   * @param type - The type of dialog to open.
   * @param data - The data to display in the dialog.
   */
  }

  openDialog(type: string, data: any): void {
    console.log('Movie Data:', data);  
    this.dialog.open(MovieDetailsDialogComponent, {
      data: { type, data }
    });
  }
  /**
   * Removes a movie from the user's favorites.
   * 
   * @param movieId - The ID of the movie to remove.
   */
  removeFromFavorites(movieId: string): void {
    const userName = localStorage.getItem('user');
    if (userName){
      this.fetchApiData.deleteMovieFromFavorites(userName, movieId).subscribe((response: any) => {
       this.favoriteMoviesIDs = this.favoriteMoviesIDs.filter(id => id !== movieId);
        console.log('Movie removed');
      });
      }
  }

  /**
   * Adds a movie to the user's favorites.
   * 
   * @param movieId - The ID of the movie to add.
   */
  addToFavorites(movieId: string): void {
    const userName = localStorage.getItem('user');
    if (userName) {
      this.fetchApiData.addMovieToFavorites(userName, movieId).subscribe((response: any) => {
        this.favoriteMoviesIDs.push(movieId);
        console.log('Movie added to favorites:', response);
      });
    }
  }
}