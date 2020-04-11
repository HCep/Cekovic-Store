import { SliderComponent } from './slider/slider.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'nav', component: NavComponent},
  {path: 'home', component: HomeComponent},
  {path: 'slider', component: SliderComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
