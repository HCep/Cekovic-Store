import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { NavComponent } from "./nav/nav.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SliderComponent } from './slider/slider.component';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md'
import { NguCarouselModule } from '@ngu/carousel';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavComponent, FooterComponent, SliderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule, WavesModule,NguCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
