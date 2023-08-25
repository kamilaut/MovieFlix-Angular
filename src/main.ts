/**
 * Main entry point for the Angular application.
 * 
 * @module main.ts
 */

// Angular platform. This is needed to bootstrap the application.
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// The application module
import { AppModule } from './app/app.module';

/**
 * Bootstrap the application.
 * 
 * @function platformBrowserDynamic().bootstrapModule
 * @param {AppModule} AppModule - The main application module.
 * @returns {Promise} A promise that resolves when the application is bootstrapped.
 * @throws {Error} Will throw an error if bootstrapping the AppModule fails.
 */

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
