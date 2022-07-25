import { Component, OnInit } from "@angular/core";
import { survey } from "./survey";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { questions } from "src/app/questions";
import { Router } from "@angular/router";
import { calcHealthService } from "src/app/CalcHealth.service";
import { DateUtils } from "src/app/common";
import { SurveyServiceService } from "./survey-service.service";
@Component({
  selector: "app-survey",
  templateUrl: "./survey.component.html",
  styleUrls: ["./survey.component.css"],
})
export class SurveyComponent implements OnInit {
  SS_Name: any = "";
  SS_EmpCode: any = "";
  SS_Company: any = "";
  SS_Manager: any = "";
  constructor(
    private route: Router,
    private calc: calcHealthService,
    private surveyService: SurveyServiceService
  ) {}
  surveyForm!: FormGroup;
  surveyValue: survey = new survey();

  questionList: any;
  ngOnInit(): void {
    this.surveyForm = new FormGroup({
      qn1: new FormControl("1", [Validators.required]),
      qn2: new FormControl("", [Validators.required]),
      qn3: new FormControl("", [Validators.required]),
      qn4: new FormControl("No", [Validators.required]),
      qn5: new FormControl("", [Validators.required]),
      qn6: new FormControl("", [Validators.required]),
      qn7: new FormControl("", [Validators.required]),
      qn8: new FormControl("", [Validators.required]),
      qn9: new FormControl("", [Validators.required]),
      qn10: new FormControl("", [Validators.required]),
      qn11: new FormControl("", [Validators.required]),
      qn12: new FormControl("", [Validators.required]),
      qn13: new FormControl("No", [Validators.required]),
      qn14: new FormControl("No", [Validators.required]),
      qn15: new FormControl("", [Validators.required]),
      qn16: new FormControl("No", [Validators.required]),
      qn17: new FormControl("No", [Validators.required]),
      qn18: new FormControl("", [Validators.required]),
      qn19: new FormControl("1st & 2nd Dose", [Validators.required]),
      qn20: new FormControl("", [Validators.required]),
    });
    this.validateSession();
    this.loadQuestions();
  }

  validateSession() {
    this.SS_Name = sessionStorage.getItem("name");
    this.SS_EmpCode = sessionStorage.getItem("empcode");
    this.SS_Company = sessionStorage.getItem("company");
    this.SS_Manager = sessionStorage.getItem("manager");

    this.checkNullableSession(
      this.SS_Name,
      this.SS_EmpCode,
      this.SS_Company,
      this.SS_Manager
    );
  }

  checkNullableSession(
    SS_Name: string,
    SS_EmpCode: string,
    SS_Company: string,
    SS_Manager: string
  ) {
    if (!SS_Name && !SS_EmpCode && !SS_Company && !SS_Manager) {
      this.route.navigateByUrl("/");
    }
  }

  loadQuestions() {
    this.questionList = questions;
    console.log(this.questionList);
  }

  calcRes: number = 0;
  resData: any;
  submitBtnValue: string = "Submit";
  onSubmit() {
    this.submitBtnValue = "Submitting your Survey";
    this.surveyValue = this.surveyForm.value;
    this.calcRes = this.calc.calculation(this.surveyValue);

    this.surveyValue.empCode = this.SS_EmpCode.toUpperCase();
    this.surveyValue.year = DateUtils.CURRENT_YEAR.toString();
    this.surveyValue.month = DateUtils.CURRENT_MONTH.toString();

    this.surveyValue.healthPercent = Math.round(
      ((this.calcRes / 19) * 100) / 100
    );
    if (this.calcRes > 10 && this.calcRes < 30) {
      this.surveyValue.healthStatus = "Poor";
    } else if (this.calcRes >= 30 && this.calcRes < 50) {
      this.surveyValue.healthStatus = "Average";
    } else if (this.calcRes >= 50 && this.calcRes < 70) {
      this.surveyValue.healthStatus = "Good";
    } else if (this.calcRes >= 70 && this.calcRes < 100) {
      this.surveyValue.healthStatus = "Excellent";
    }

    console.log(this.surveyValue);
    this.surveyService.newUser(this.surveyValue).subscribe((data) => {
      this.resData = data;
      if (this.resData.status == 0) {
        sessionStorage.clear();
        this.route.navigateByUrl("/survey-success");
        sessionStorage.setItem("survey-result", this.calcRes.toString());
      } else {
        this.submitBtnValue = "Submit";
      }
    });
  }
}
