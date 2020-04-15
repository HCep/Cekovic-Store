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
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { NguCarouselModule } from '@ngu/carousel';
import { SklepComponent } from './sklep/sklep.component';
import { appRoutes } from './routes';
import { IconsModule } from 'angular-bootstrap-md';
import { ButtonsModule, CardsModule, InputsModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KontaktComponent } from './kontakt/kontakt.component';
import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavComponent, FooterComponent, SliderComponent, SklepComponent, KontaktComponent],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    CommonModule,
    RecaptchaModule,
    FormGroup,
    FormBuilder,
    Validators ,
    ButtonsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CardsModule,
    InputsModule,
    IconsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    CarouselModule, WavesModule,NguCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
