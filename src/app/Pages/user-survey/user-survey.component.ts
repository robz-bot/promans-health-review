import { Component, OnInit } from '@angular/core';
import { questions } from 'src/app/questions';

@Component({
  selector: 'app-user-survey',
  templateUrl: './user-survey.component.html',
  styleUrls: ['./user-survey.component.css']
})
export class UserSurveyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadQuestions()
  }

  loadQuestions(){
this.questionList=questions
console.log(this.questionList)
  }

  questionList:any

}
