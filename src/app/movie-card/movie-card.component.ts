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

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getMovies();
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

  addToFavorites(movieId: string): void {
    const userName = localStorage.getItem('user');
    if (userName) {
      this.fetchApiData.addMovieToFavorites(userName, movieId).subscribe((response: any) => {
        console.log('Movie added to favorites:', response);
      });
    }
  }
}