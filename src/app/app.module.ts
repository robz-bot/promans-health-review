import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { SurveyComponent } from './Pages/survey/survey.component';
import { SurveySuccessComponent } from './Pages/survey-success/survey-success.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SurveyComponent,
    SurveySuccessComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
