import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminDashboardComponent } from "./Pages/admin-dashboard/admin-dashboard.component";
import { AdminLoginComponent } from "./Pages/admin-login/admin-login.component";
import { HomeComponent } from "./Pages/home/home.component";
import { SurveySuccessComponent } from "./Pages/survey-success/survey-success.component";
import { UserSurveyListComponent } from "./Pages/user-survey-list/user-survey-list.component";
import { SurveyComponent } from "./Pages/survey/survey.component";
import { UserSurveyComponent } from "./Pages/user-survey/user-survey.component";

const routes: Routes = [
  { path: "admin-login", component: AdminLoginComponent },
  { path: "admin-dashboard", component: AdminDashboardComponent },
  { path: "", component: HomeComponent },
  { path: "survey", component: SurveyComponent },
  { path: "survey-success", component: SurveySuccessComponent },
  { path: "survey-list", component: UserSurveyListComponent },
  { path: "user-survey/:empcode/:year", component: UserSurveyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
