import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { NavComponent } from "./nav/nav.component";
import { SliderComponent } from './slider/slider.component';
import { SklepComponent } from './sklep/sklep.component';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'nav', component: NavComponent},
  {path: 'slider', component: SliderComponent},
  {path: 'sklep', component: SklepComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];