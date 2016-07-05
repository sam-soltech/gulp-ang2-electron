import { provideRouter, RouterConfig } from '@angular/router';
import { LoginComponent } from './login-component/login.component';


export const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/login'
    // ,
    // pathMatch: 'full'
  },
  { path: '/login', component: LoginComponent },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
