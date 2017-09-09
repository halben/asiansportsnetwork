import { HomeComponent } from './home/home.component';

export const AppRoutes = [
  { path : '', pathMatch: 'full', component: HomeComponent},
  { path : '**', redirectTo: ''}
];
