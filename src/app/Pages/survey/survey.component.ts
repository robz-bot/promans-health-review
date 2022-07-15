import { Component, OnInit } from '@angular/core';
import { survey } from './survey';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  constructor() { }
  surveyForm!: FormGroup;
  surveyValue: survey = new survey();
  ngOnInit(): void {
    this.surveyForm = new FormGroup({
      qn1: new FormControl("", [
        Validators.required,
      ]),
      qn2: new FormControl("", [
        Validators.required,
      ]),
      qn3: new FormControl("", [
        Validators.required,
      ]),
      qn4: new FormControl("", [
        Validators.required,
      ]),
      qn5: new FormControl("", [
        Validators.required,
      ]),
      qn6: new FormControl("", [
        Validators.required,
      ]),
      qn7: new FormControl("", [
        Validators.required,
      ]),
      qn8: new FormControl("", [
        Validators.required,
      ]),
      qn9: new FormControl("", [
        Validators.required,
      ]),
      qn10: new FormControl("", [
        Validators.required,
      ]),
      qn11: new FormControl("", [
        Validators.required,
      ]),
      qn12: new FormControl("", [
        Validators.required,
      ]),
    })
  }

  onSubmit(){
    this.surveyValue = this.surveyForm.value;
    console.log(this.surveyValue);
  }

}
