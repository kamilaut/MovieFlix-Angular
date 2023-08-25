import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

const apiUrl = 'https://mirror-stage.herokuapp.com/';
/**
 * FetchApiDataService is a service that provides methods to interact with the API.
 * @class
 * @public
 */
@Injectable({
  providedIn: 'root'
})
export class FetchApiDataService {
  
  /**
   * Constructor for the FetchApiDataService class.
   * @constructor
   * @public
   * @param {HttpClient} http - The Angular HttpClient used to make HTTP requests.
   */
  constructor(private http: HttpClient) {}

  /**
   * Returns HttpHeaders with the Authorization token.
   * @private
   * @returns {HttpHeaders} - The HttpHeaders.
   */
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      Authorization: 'Bearer ' + token
    });
    
  /**
   * Makes a request to the API.
   * @private
   * @param {string} method - The HTTP method for the request.
   * @param {string} url - The URL for the request.
   * @param {any} body - The body of the request.
   * @returns {Observable<any>} - The response from the API.
   */
  }

  private request<T>(method: string, url: string, body?: any): Observable<any> {
  const headers = this.getHeaders();
  return this.http.request(method, url, {
    body,
    headers
  }).pipe(
    catchError(this.handleError)
  );
  /**
   * Registers a new user.
   * @public
   * @param {any} userDetails - The details of the user to register.
   * @returns {Observable<any>} - The response from the API.
   */
}
  public userRegistration(userDetails: any): Observable<any> {
    return this.http.post(apiUrl + 'users', userDetails).pipe(
      catchError(this.handleError)
    );
    
  /**
   * Logs in a user.
   * @public
   * @param {any} credentials - The credentials of the user to log in.
   * @returns {Observable<any>} - The response from the API.
   */
  }

  userLogin(credentials: any): Observable<any> {
    return this.http.post(apiUrl + 'login', credentials).pipe(
      catchError(this.handleError)
    );
    
  /**
   * Gets all movies.
   * @public
   * @returns {Observable<any>} - The response from the API.
   */
  }

  getAllMovies(): Observable<any> {
    return this.request<any>('GET', apiUrl + 'movies');
    
  /**
   * Gets a movie by title.
   * @public
   * @param {string} title - The title of the movie.
   * @returns {Observable<any>} - The response from the API.
   */
  }
  
  getOneMovie(title: string): Observable<any> {
    return this.http.get(apiUrl + 'movies/' + title).pipe(
      catchError(this.handleError)
    );
    
  /**
   * Gets a director by name.
   * @public
   * @param {string} directorName - The name of the director.
   * @returns {Observable<any>} - The response from the API.
   */
  }

  getOnedirector(directorName: string): Observable<any> {
    return this.http.get(apiUrl + 'movies/directors/' + directorName).pipe(
      catchError(this.handleError)
    );
      /**
   * Gets a genre by name.
   * @public
   * @param {string} genreName - The name of the genre.
   * @returns {Observable<any>} - The response from the API.
   */
  }

  getOnegenre(genreName: string): Observable<any> {
    return this.http.get(apiUrl + 'movies/genres/' + genreName).pipe(
      catchError(this.handleError)
    );
    
  /**
   * Gets a user by username.
   * @public
   * @param {string} userName - The username of the user.
   * @returns {Observable<any>} - The response from the API.
   */
  }

  getOneuser(userName: string): Observable<any> {
    return this.request<any>('GET', apiUrl + 'users/' + userName).pipe(
      catchError(this.handleError)
    );
    
  /**
   * Gets the favorite movies of a user.
   * @public
   * @param {string} userName - The username of the user.
   * @returns {Observable<any>} - The response from the API.
   */
  }
  
  getFavoriteMovies(userName: string): Observable<any> {
    return this.http.get(apiUrl + 'users/' + userName + '/movies').pipe(
      catchError(this.handleError)
    );
    
  /**
   * Adds a movie to the favorites of a user.
   * @public
   * @param {string} userName - The username of the user.
   * @param {string} movieId - The ID of the movie.
   * @returns {Observable<any>} - The response from the API.
   */
  }

  addMovieToFavorites(userName: string, movieId: string): Observable<any> {
    return this.request('POST', apiUrl + 'users/' + userName+ '/movies/' + movieId, {}).pipe(
      catchError(this.handleError)
    );
    
  /**
   * Edits a user.
   * @public
   * @param {string} userName - The username of the user.
   * @param {any} userDetails - The new details of the user.
   * @returns {Observable<any>} - The response from the API.
   */
  }

  editUser(userName: string, userDetails: any): Observable<any> {
    return this.request('PUT', apiUrl + 'users/' + userName, userDetails).pipe(
      catchError(this.handleError)
    );
    
  /**
   * Deletes a user.
   * @public
   * @param {string} userName - The username of the user.
   * @returns {Observable<any>} - The response from the API.
   */
  }
  
  deleteUser(userName: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.delete(apiUrl + 'users/' + userName, { headers, responseType: 'text' })
    .pipe(catchError(this.handleError)
    );
    
  /**
   * Deletes a movie from the favorites of a user.
   * @public
   * @param {string} userName - The username of the user.
   * @param {string} movieId - The ID of the movie.
   * @returns {Observable<any>} - The response from the API.
   */
  }

  deleteMovieFromFavorites(userName: string, movieId: string): Observable<any> {
    return this.request('DELETE', apiUrl + 'users/' + userName + '/movies/' + movieId).pipe(
      catchError(this.handleError)
    );
    
  /**
   * Handles an HTTP error.
   * @private
   * @param {HttpErrorResponse} error - The error to handle.
   * @returns {any} - The error message.
   */
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
