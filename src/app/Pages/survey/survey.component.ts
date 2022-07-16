import { Component, OnInit } from "@angular/core";
import { survey } from "./survey";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-survey",
  templateUrl: "./survey.component.html",
  styleUrls: ["./survey.component.css"],
})
export class SurveyComponent implements OnInit {
  constructor() {}
  surveyForm!: FormGroup;
  surveyValue: survey = new survey();
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
  }

  onSubmit() {
    this.surveyValue = this.surveyForm.value;
    console.log(this.surveyValue);
  }
}
