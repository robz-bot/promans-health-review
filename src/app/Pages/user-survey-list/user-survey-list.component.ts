import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HomeServiceService } from "../home/home-service.service";
import { register } from "../home/register";

@Component({
  selector: "app-user-survey-list",
  templateUrl: "./user-survey-list.component.html",
  styleUrls: ["./user-survey-list.component.css"],
})
export class UserSurveyListComponent implements OnInit {
  constructor(
    private homeService: HomeServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  userList: register[] = [];
  getAllUsers() {
    this.homeService.getAllUsers().subscribe((data) => {
      console.log(data);
      this.userList = data;
    });
  }

  navigateToUserSurvey(item: register) {
    this.router.navigateByUrl(
      `/user-survey/${item.empCode}/${item.year}?month=${item.month}`
    );
  }
}
