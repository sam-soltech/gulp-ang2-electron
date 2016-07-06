import { provideRouter, RouterConfig } from '@angular/router';
import { LoginComponent } from './login-component/login.component';
import { DashComponent } from './dash-componets/main-dash.component';

export const routes: RouterConfig = [
  {
    path: '',
    redirectTo: 'dash',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: 'dash', component: DashComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
