import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

const apiUrl = 'https://mirror-stage.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class FetchApiDataService {
  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      Authorization: 'Bearer ' + token
    });
  }

  private request<T>(method: string, url: string, body?: any): Observable<any> {
  const headers = this.getHeaders();
  return this.http.request(method, url, {
    body,
    headers
  }).pipe(
    catchError(this.handleError)
  );
}
  public userRegistration(userDetails: any): Observable<any> {
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
    return this.request<any>('GET', apiUrl + 'movies');
  }
  
  getOneMovie(title: string): Observable<any> {
    return this.http.get(apiUrl + 'movies/' + title).pipe(
      catchError(this.handleError)
    );
  }

  getOnedirector(directorName: string): Observable<any> {
    return this.http.get(apiUrl + 'movies/directors/' + directorName).pipe(
      catchError(this.handleError)
    );
  }

  getOnegenre(genreName: string): Observable<any> {
    return this.http.get(apiUrl + 'movies/genres/' + genreName).pipe(
      catchError(this.handleError)
    );
  }

  getOneuser(userName: string): Observable<any> {
    return this.request<any>('GET', apiUrl + 'users/' + userName).pipe(
      catchError(this.handleError)
    );
  }

  getFavoriteMovies(userName: string): Observable<any> {
    return this.http.get(apiUrl + 'users/' + userName + '/movies').pipe(
      catchError(this.handleError)
    );
  }

  addMovieToFavorites(userName: string, movieId: string): Observable<any> {
    return this.http.post(apiUrl + 'users/' + userName+ '/movies/' + movieId, {}).pipe(
      catchError(this.handleError)
    );
  }

  editUser(userName: string, userDetails: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.put(apiUrl + 'users/' + userName, userDetails, { headers }).pipe(
      catchError(this.handleError)
    );
  }
  
  deleteUser(userName: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.delete(apiUrl + 'users/' + userName, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  deleteMovieFromFavorites(userName: string, movieId: string): Observable<any> {
    return this.http.delete(apiUrl + 'users/' + userName + '/movies/' + movieId).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
}