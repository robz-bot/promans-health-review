import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { HomeServiceService } from "../home/home-service.service";
import { register } from "../home/register";
import { surveyYearAndTitle } from "../survey/survey";
import { SurveyServiceService } from "../survey/survey-service.service";

@Component({
  selector: "app-user-survey-list",
  templateUrl: "./user-survey-list.component.html",
  styleUrls: ["./user-survey-list.component.css"],
})
export class UserSurveyListComponent implements OnInit {
  constructor(
    private homeService: HomeServiceService,
    private router: Router,
    private surveyService: SurveyServiceService
  ) {}

  @ViewChild("cycle1Tab")
  cycle1Tab!: ElementRef;

  ngOnInit(): void {
    //this.getAllUsers();
    this.getSurveyYearAndTitle();
    
  }

  enableTab1(year:string) {
    this.cycle1Tab.nativeElement.click();
    this.getAllUserBasedOnCycleAndYear(
      "cycle1",
      year
    );
  }

  list = [
    {
      year: "2022",
      title: "User survey - 2022",
    },
    {
      year: "2021",
      title: "User survey - 2021",
    },
  ];

  userList: register[] = [];
  userListCount:number =0;
  getAllUsers() {
    this.homeService.getAllUsers().subscribe((data) => {
      console.log(data);
      this.userList = data;
      this.userListCount = this.userList.length
    });
  }

  getAllUserBasedOnCycleAndYear(cycle: string, year: string) {
    console.log("getAllUserBasedOnCycleAndYear");
    console.log(cycle + " " + year);
    this.homeService
      .getAllUserBasedOnCycleAndYear(cycle, year)
      .subscribe((data) => {
        console.log(data);
        this.userList = data;
        this.userListCount = this.userList.length
      });
      
  }

  surveyYearAndTitleList: any;
  getSurveyYearAndTitle() {
    this.surveyService.getSurveyYearAndTitle().subscribe((data) => {
      console.log("getSurveyYearAndTitle "+data);
      this.surveyYearAndTitleList = data;
    });
    console.log(this.surveyYearAndTitleList[0].year)
    this.getAllUserBasedOnCycleAndYear(
      "cycle1",
      this.surveyYearAndTitleList[0].year
    );
  }

  navigateToUserSurvey(item: register) {
    this.router.navigateByUrl(
      `/user-survey/${item.empCode}/${item.year}?month=${item.month}`
    );
  }
}
