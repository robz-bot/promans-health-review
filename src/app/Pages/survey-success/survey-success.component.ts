import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-survey-success',
  templateUrl: './survey-success.component.html',
  styleUrls: ['./survey-success.component.css']
})
export class SurveySuccessComponent implements OnInit {
  SS_SurveyResult: any=""
  surveyResMsg: string="";
  surveyResColor: string="";

  constructor(private route: Router) { }
  
   

  ngOnInit(): void {
    this.SS_SurveyResult = sessionStorage.getItem('survey-result');
    console.log(this.SS_SurveyResult)
    this.SS_SurveyResult = (this.SS_SurveyResult/20)*100/100;
    if(this.SS_SurveyResult >10 && this.SS_SurveyResult < 30){
      this.surveyResMsg = "  Poor"
      this.surveyResColor = "#F50057"
    }else if(this.SS_SurveyResult >=30 && this.SS_SurveyResult < 50){
      this.surveyResMsg = "  Average"
      this.surveyResColor = "#F9A826"
    
    }else if(this.SS_SurveyResult >=50 && this.SS_SurveyResult < 70){
      this.surveyResMsg = "  Good"
      this.surveyResColor = "#6C63FF"
    
    }else if(this.SS_SurveyResult >=70 && this.SS_SurveyResult < 100){
      this.surveyResMsg = "  Excellent"
      this.surveyResColor = "#00BFA6"
    }
    console.log(this.SS_SurveyResult)
    if(!this.SS_SurveyResult) {
      this.route.navigateByUrl("/")
    }
  }

}
