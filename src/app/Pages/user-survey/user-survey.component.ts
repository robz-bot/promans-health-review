import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { questions } from "src/app/questions";
import { SurveyServiceService } from "../survey/survey-service.service";

@Component({
  selector: "app-user-survey",
  templateUrl: "./user-survey.component.html",
  styleUrls: ["./user-survey.component.css"],
})
export class UserSurveyComponent implements OnInit {
  paramEmpCode: string = "";
  paramYear: string = "";
  paramMonth: string = "";
  constructor(
    private aroute: ActivatedRoute,
    private surveyService: SurveyServiceService
  ) {}
  questionList: any;
  ngOnInit(): void {
    this.loadQuestions();
    this.paramEmpCode = this.aroute.snapshot.params["empcode"];
    this.paramYear = this.aroute.snapshot.params["year"];
    this.paramMonth = 
    this.aroute.snapshot.queryParams["month"]

    this.loadUserData();
  }

  surveyResData:any
  loadUserData() {
    this.surveyService
      .getSurveyByEmpCodeYearAndMonth(
        this.paramEmpCode,
        this.paramYear,
        this.paramMonth
      )
      .subscribe((data) => {
        console.log(data);
        this.surveyResData=data;
      });
  }

  loadQuestions() {
    this.questionList = questions;
  }
}
