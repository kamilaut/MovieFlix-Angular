import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MovieDetailsDialogComponent } from '../movie-details-dialog/movie-details-dialog.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  movies: any[] = [];
  favoriteMoviesIDs: any[] = [];

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getMovies();
    this.getFavoriteMovies();
  }
  
  getFavoriteMovies(): void {
    const userName = localStorage.getItem('user');
    if (userName){
      this.fetchApiData.getOneuser(userName).subscribe((response: any) => {
        this.favoriteMoviesIDs = response.FavoriteMovies;
      })
    
    }
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
    });
  }

  openDialog(type: string, data: any): void {
    console.log('Movie Data:', data);  
    this.dialog.open(MovieDetailsDialogComponent, {
      data: { type, data }
    });
  }
  
  removeFromFavorites(movieId: string): void {
    const userName = localStorage.getItem('user');
    if (userName){
      this.fetchApiData.deleteMovieFromFavorites(userName, movieId).subscribe((response: any) => {
       this.favoriteMoviesIDs = this.favoriteMoviesIDs.filter(id => id !== movieId);
        console.log('Movie removed');
      });
      }
  }

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