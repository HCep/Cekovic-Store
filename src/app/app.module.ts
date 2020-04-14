import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { NavComponent } from "./nav/nav.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SliderComponent } from './slider/slider.component';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md'
import { NguCarouselModule } from '@ngu/carousel';
import { SklepComponent } from './sklep/sklep.component';
import { appRoutes } from './routes';
import { IconsModule } from 'angular-bootstrap-md'


@NgModule({
  declarations: [AppComponent, HomeComponent, NavComponent, FooterComponent, SliderComponent, SklepComponent],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    CommonModule,
    IconsModule, 
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    CarouselModule, WavesModule,NguCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
