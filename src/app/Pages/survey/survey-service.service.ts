import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { baseUrl, apiKey } from "src/app/common";
import { survey } from "./survey";

@Injectable({
  providedIn: "root",
})
export class SurveyServiceService {
  constructor(private httpClient: HttpClient) {}
  //Home URL
  private addSurveyUrl = baseUrl.BASE_URL + "addSurvey";
  private getSurveyByEmpCodeYearAndMonthUrl =
    baseUrl.BASE_URL + "getSurveyByEmpCodeYearAndMonth";
  newUser(sur: survey): Observable<Object> {
    return this.httpClient.post(`${this.addSurveyUrl}`, sur, {
      headers: {
        "pro-api-key": apiKey.API_KEY,
      },
    });
  }

  getSurveyByEmpCodeYearAndMonth(
    empCode: string,
    year: string,
    month: string
  ): Observable<Object> {
    return this.httpClient.get(
      `${this.getSurveyByEmpCodeYearAndMonthUrl}/${empCode}/${year}/${month}`,
      {
        headers: {
          "pro-api-key": apiKey.API_KEY,
        },
      }
    );
  }
}
