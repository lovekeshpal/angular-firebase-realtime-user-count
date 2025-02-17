import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserCountComponent } from './components/user-count/user-count.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'user-count', component: UserCountComponent },
  { path: '', redirectTo: '/user-count', pathMatch: 'full' },
];
