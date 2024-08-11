import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { setBasePath } from '@shoelace-style/shoelace';

// Tell shoelace where to look for assets
setBasePath('/shoelace/');
import '@shoelace-style/shoelace/dist/shoelace.js'

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
