import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./Pages/home/home.component";
import { SurveyComponent } from "./Pages/survey/survey.component";
import { SurveySuccessComponent } from "./Pages/survey-success/survey-success.component";
import { AdminLoginComponent } from "./Pages/admin-login/admin-login.component";
import { AdminDashboardComponent } from "./Pages/admin-dashboard/admin-dashboard.component";
import { AdminHeaderComponent } from "./Pages/admin-header/admin-header.component";
import { HttpClientModule } from "@angular/common/http";
import { NgApexchartsModule } from "ng-apexcharts";
import { StackedBarChartComponent } from "./Pages/Charts/stacked-bar-chart/stacked-bar-chart.component";
import { UserSurveyListComponent } from "./Pages/user-survey-list/user-survey-list.component";
import { UserSurveyComponent } from "./Pages/user-survey/user-survey.component";
import { LoaderComponent } from './Pages/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SurveyComponent,
    SurveySuccessComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminHeaderComponent,
    StackedBarChartComponent,
    UserSurveyListComponent,
    UserSurveyComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
