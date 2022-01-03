import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}

console.log('Entered main');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

console.log('Bootstrapped AppModule in main');
