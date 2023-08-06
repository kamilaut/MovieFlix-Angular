import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Title } from '@angular/platform-browser';

//Declaring the api url that will provide data for the client app
const apiUrl = 'https://mirror-stage.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class FetchApiDataService {
  // Inject the HttpClient module to the constructor params
 // This will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) {
  }
 // Making the api call for the user registration endpoint
  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'users', userDetails).pipe(
    catchError(this.handleError)
    );
  }
  
  userLogin(credentials: any): Observable<any> {
    return this.http.post(apiUrl + 'login', credentials).pipe(
      catchError(this.handleError)
    );
  }

  getAllMovies(): Observable<any> {
    return this.http.get(apiUrl + 'movies').pipe(
      catchError(this.handleError)
    );
  }

  getOneMovie(title: string): Observable<any> {
    return this.http.get(apiUrl + 'movies/' + title).pipe(
      catchError(this.handleError)
    );
  }

  getOnedirector(directorName: string): Observable<any> {
    return this.http.get(apiUrl + 'directors/' + directorName).pipe(
      catchError(this.handleError)
    );
  }

  getOnegenre(genreName: string): Observable<any> {
    return this.http.get(apiUrl + 'genres/' + genreName).pipe(
      catchError(this.handleError)
    );
  }

  getOneuser(userName: string): Observable<any> {
    return this.http.get(apiUrl + 'users/' + userName).pipe(
      catchError(this.handleError)
    );
  }

  getFavoriteMovies(userId: string): Observable<any> {
    return this.http.get(apiUrl + 'users/' + userId + '/movies').pipe(
      catchError(this.handleError)
    );
  }

  addMovieToFavorites(userId: string, movieId: string): Observable<any> {
    return this.http.post(apiUrl + 'users/' + userId + '/movies/' + movieId, {}).pipe(
      catchError(this.handleError)
    );
  }

  editUser(userId: string, userDetails: any): Observable<any> {
    return this.http.put(apiUrl + 'users/' + userId, userDetails).pipe(
      catchError(this.handleError)
    );
  }

  deleteUser(userName: string): Observable<any> {
    return this.http.delete(apiUrl + 'users/' + userName).pipe(
      catchError(this.handleError)
    );
  }

  deleteMovieFromFavorites(userId: string, movieId: string): Observable<any> {
    return this.http.delete(apiUrl + 'users/' + userId + '/movies/' + movieId).pipe(
      catchError(this.handleError)
    );
  }

private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  }
  
}
