import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { DateUtils, patterns } from "src/app/common";
import { HomeServiceService } from "./home-service.service";
import { register } from "./register";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(
    private route: Router,
    private homeServiceService: HomeServiceService
  ) {}

  registerForm!: FormGroup;
  registerValue: register = new register();
  isEmpCodeValid: boolean = true;
  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      empCode: new FormControl("", [Validators.required]),
      company: new FormControl("", [Validators.required]),
      manager: new FormControl("", [Validators.required]),
    });
  }

  resData: any;
  submitBtnValue: string = "Start Survey";
  onSubmit() {
    this.submitBtnValue = "Starting your Survey";
    this.registerValue = this.registerForm.value;
    console.log(this.registerValue);
    this.registerValue.empCode = this.registerForm.value.empCode;
    if (!patterns.ONLY_ALPHNUMERIC_PATTERN.test(this.registerValue.empCode)) {
      this.isEmpCodeValid = false;
      this.submitBtnValue = "Start Survey";
      return;
    }
    this.registerValue.empCode = this.registerValue.empCode.toUpperCase();
    this.registerValue.year = DateUtils.CURRENT_YEAR.toString();
    this.registerValue.month = DateUtils.CURRENT_MONTH.toString();

    this.homeServiceService.newUser(this.registerValue).subscribe((data) => {
      this.resData = data;
      if (this.resData.status == 0) {
        this.savedInSession(this.registerValue);
        this.route.navigateByUrl("/survey");
      } else {
        this.submitBtnValue = "Start Survey";
      }
    });
  }

  savedInSession(form: register) {
    sessionStorage.setItem("name", form.name);
    sessionStorage.setItem("empcode", form.empCode);
    sessionStorage.setItem("company", form.company);
    sessionStorage.setItem("manager", form.manager);
  }
}
