import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./Pages/home/home.component";
import { SurveySuccessComponent } from "./Pages/survey-success/survey-success.component";
import { SurveyComponent } from "./Pages/survey/survey.component";

const routes: Routes = [{ path: "", component: HomeComponent },{ path: "survey", component: SurveyComponent },{ path: "survey-success", component: SurveySuccessComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
