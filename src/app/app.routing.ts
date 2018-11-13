import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about-us', component: AboutUsComponent },
  { path: '**',  redirectTo: '/', pathMatch: 'full' },
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);

