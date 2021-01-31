import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'main', canActivate: [AuthGuard], loadChildren: () => import('./main/main.module').then(mod => mod.MainModule) },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', component: MainComponent }
];
