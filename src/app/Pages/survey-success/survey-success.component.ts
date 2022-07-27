import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { calcHealthService } from "src/app/CalcHealth.service";
import { colorUtils } from "src/app/common";

@Component({
  selector: "app-survey-success",
  templateUrl: "./survey-success.component.html",
  styleUrls: ["./survey-success.component.css"],
})
export class SurveySuccessComponent implements OnInit {
  SS_SurveyResult: any = "";
  surveyResMsg: string = "";
  surveyResColor: string = "";

  constructor(private route: Router, private calc: calcHealthService) {}

  ngOnInit(): void {
    this.SS_SurveyResult = sessionStorage.getItem("survey-result");
    console.log(this.SS_SurveyResult);

    this.SS_SurveyResult = this.calc.calcHealthPercent(this.SS_SurveyResult);
    console.log("SS_SurveyResult:" + this.SS_SurveyResult);

    this.surveyResMsg = this.calc.calcHealthStatus(this.SS_SurveyResult);
    console.log("SurveyResMsg:" + this.surveyResMsg);

    if (this.surveyResMsg == "Poor") {
      this.surveyResColor = colorUtils.COLOR_POOR;
    } else if (this.surveyResMsg == "Average") {
      this.surveyResColor = colorUtils.COLOR_AVERAGE;
    } else if (this.surveyResMsg == "Good") {
      this.surveyResColor = colorUtils.COLOR_GOOD;
    } else if (this.surveyResMsg == "Excellent") {
      this.surveyResColor = colorUtils.COLOR_EXCELLENT;
    }
    console.log(this.SS_SurveyResult);
    if (!this.SS_SurveyResult) {
      this.route.navigateByUrl("/");
    }
  }
}
