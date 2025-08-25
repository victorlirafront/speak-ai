import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { CatalogComponent } from './app/catalog.component';
import { CATALOG_ROUTES } from './app/catalog.routes';

bootstrapApplication(CatalogComponent, {
  providers: [
    provideRouter(CATALOG_ROUTES)
  ]
}).catch(err => console.error(err));
