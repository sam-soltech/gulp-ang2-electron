import {bootstrap}    from '@angular/platform-browser-dynamic';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import {AppComponent} from './app.component';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';
bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  disableDeprecatedForms(),
  provideForms()
])
.catch(err => console.error(err));
