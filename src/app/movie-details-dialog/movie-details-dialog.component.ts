import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
/**
 * @component
 * @description
 * This component is used to display the details of a movie in a dialog.
 * It uses Angular Material's Dialog component.
 * 
 * @selector app-movie-details-dialog
 * @templateUrl ./movie-details-dialog.component.html
 * @styleUrls ./movie-details-dialog.component.scss
 */
@Component({
  selector: 'app-movie-details-dialog',
  templateUrl: './movie-details-dialog.component.html',
  styleUrls: ['./movie-details-dialog.component.scss']
})
export class MovieDetailsDialogComponent {
   /**
   * @constructor
   * @description
   * The constructor injects the data for the movie to be displayed in the dialog.
   * 
   * @param {any} data - The data for the movie.
   */
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

