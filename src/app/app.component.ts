/**
 * The main application component.
 * 
 * @file This file defines the main application component for the myFlix-Angular application.
 * 
 * @requires Component - Angular core component.
 */
import { Component } from '@angular/core';

/**
 * @component AppComponent
 * 
 * @selector app-root - The selector name that could be used in HTML elements.
 * 
 * @templateUrl ./app.component.html - The location of the component's HTML template.
 * 
 * @styleUrls ['./app.component.scss'] - The location(s) of the component's style file(s).
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * @property title - The title of the application.
   */
  title = 'myFlix-Angular';
}