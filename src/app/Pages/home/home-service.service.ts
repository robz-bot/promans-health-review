import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { baseUrl, apiKey } from "src/app/common";
import { register } from "./register";

@Injectable({
  providedIn: "root",
})
export class HomeServiceService {
  constructor(private httpClient: HttpClient) {}
  //Home URL
  private newUserUrl = baseUrl.BASE_URL + "addUser";
  private getAllUsersUrl = baseUrl.BASE_URL + "getAllUsers";

  newUser(reg: register): Observable<Object> {
    return this.httpClient.post(`${this.newUserUrl}`, reg, {
      headers: {
        "pro-api-key": apiKey.API_KEY,
      },
    });
  }
  getAllUsers() {
    return this.httpClient.get<register[]>(`${this.getAllUsersUrl}`, {
      headers: {
        "pro-api-key": apiKey.API_KEY,
      },
    });
  }
}
