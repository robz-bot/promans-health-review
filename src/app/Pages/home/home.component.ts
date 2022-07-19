import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { register } from "./register";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private route: Router) {}

  registerForm!: FormGroup;
  registerValue: register = new register();
  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      employeeCode: new FormControl("", [Validators.required]),
      company: new FormControl("", [Validators.required]),
      manager: new FormControl("", [Validators.required]),
      //   email: new FormControl("", [Validators.required, Validators.email]),
    });
  }
  onSubmit() {
    this.registerValue = this.registerForm.value;
    console.log(this.registerValue);

    this.savedInSession(this.registerValue);
    this.route.navigateByUrl("/survey");
  }

  savedInSession(form: register) {
    sessionStorage.setItem("name", form.name);
    sessionStorage.setItem("empcode", form.employeeCode);
    sessionStorage.setItem("company", form.company);
    sessionStorage.setItem("manager", form.manager);
  }
}
