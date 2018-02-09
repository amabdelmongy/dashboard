import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
 
export const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
  { path: 'login', loadChildren: 'app/pages/login/login.module#LoginModule' },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' } 
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules,
  useHash: true
});


 
