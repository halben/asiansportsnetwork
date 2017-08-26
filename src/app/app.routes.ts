export const AppRoutes = [
  { path : '', pathMatch: 'full', loadChildren: './home/home.module#HomeModule'},
  { path : '**', redirectTo: ''}
];
