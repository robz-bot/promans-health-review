import { survey } from "./Pages/survey/survey";

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class calcHealthService {
  private mark: number[] = [];
  private result: number = 0;
  constructor() {}

  calcHealthStatus(calcRes: number): string {
    if (calcRes > 10 && calcRes < 30) {
      return "Poor";
    } else if (calcRes >= 30 && calcRes < 50) {
      return "Average";
    } else if (calcRes >= 50 && calcRes < 70) {
      return "Good";
    }
    return "Excellent";
  }

  calcHealthPercent(calcRes: number): number {
    return Math.round(((calcRes / 19) * 100) / 100);
  }

  calculation(surveyValue: survey): number {
    this.qn1Result(surveyValue);
    this.qn2Result(surveyValue);
    this.qn3Result(surveyValue);
    this.qn4Result(surveyValue);
    this.qn5Result(surveyValue);
    this.qn6Result(surveyValue);
    this.qn7Result(surveyValue);
    this.qn8Result(surveyValue);
    this.qn9Result(surveyValue);
    this.qn10Result(surveyValue);
    this.qn11Result(surveyValue);
    this.qn12Result(surveyValue);
    this.qn13Result(surveyValue);
    this.qn14Result(surveyValue);
    this.qn15Result(surveyValue);
    this.qn16Result(surveyValue);
    this.qn17Result(surveyValue);
    this.qn18Result(surveyValue);
    this.qn19Result(surveyValue);

    console.log(this.mark);

    this.result = this.mark.reduce((accumulator, current) => {
      return accumulator + current;
    }, 0);

    return this.result;
  }
  qn19Result(surveyValue: survey) {
    if (surveyValue.qn19 == "1st Dose") {
      this.mark.push(30);
    } else if (surveyValue.qn19 == "1st & 2nd Dose") {
      this.mark.push(70);
    } else if (surveyValue.qn19 == "Others") {
      this.mark.push(100);
    }
  }
  qn18Result(surveyValue: survey) {
    if (surveyValue.qn18 == "1 week before") {
      this.mark.push(80);
    } else if (surveyValue.qn18 == "2 weeks before") {
      this.mark.push(50);
    } else if (surveyValue.qn18 == "3 weeks before") {
      this.mark.push(20);
    }
  }
  qn17Result(surveyValue: survey) {
    if (surveyValue.qn17 == "Yes") {
      this.mark.push(10);
    } else {
      this.mark.push(100);
    }
  }
  qn16Result(surveyValue: survey) {
    if (surveyValue.qn16 == "Yes") {
      this.mark.push(10);
    } else {
      this.mark.push(100);
    }
  }
  qn15Result(surveyValue: survey) {
    if (surveyValue.qn15 == "Not Applicable") {
      this.mark.push(100);
    } else if (surveyValue.qn15 == "1-3 days") {
      this.mark.push(80);
    } else if (surveyValue.qn15 == "3-6 days") {
      this.mark.push(60);
    } else if (surveyValue.qn15 == "6-9 days") {
      this.mark.push(40);
    } else if (surveyValue.qn15 == "9-12 days") {
      this.mark.push(20);
    } else if (surveyValue.qn15 == "13-15 days") {
      this.mark.push(10);
    }
  }
  qn14Result(surveyValue: survey) {
    if (surveyValue.qn14 == "Yes") {
      this.mark.push(100);
    } else {
      this.mark.push(10);
    }
  }
  qn13Result(surveyValue: survey) {
    if (surveyValue.qn13 == "Yes") {
      this.mark.push(10);
    } else {
      this.mark.push(100);
    }
  }
  qn12Result(surveyValue: survey) {
    if (surveyValue.qn11 == "0 Day") {
      this.mark.push(15);
    } else if (surveyValue.qn12 == "1 Day") {
      this.mark.push(25);
    } else if (surveyValue.qn12 == "2 Days") {
      this.mark.push(35);
    } else if (surveyValue.qn12 == "3 Days") {
      this.mark.push(45);
    } else if (surveyValue.qn12 == "4 Days") {
      this.mark.push(55);
    } else if (surveyValue.qn12 == "5 Days") {
      this.mark.push(75);
    } else if (surveyValue.qn12 == "6 Days") {
      this.mark.push(85);
    } else if (surveyValue.qn12 == "7 Days") {
      this.mark.push(100);
    }
  }
  qn11Result(surveyValue: survey) {
    if (surveyValue.qn11 == "I do not have to take medicine") {
      this.mark.push(100);
    } else if (surveyValue.qn11 == "I always take them as prescribed") {
      this.mark.push(70);
    } else if (surveyValue.qn11 == "Sometimes I take them as prescribed") {
      this.mark.push(30);
    } else if (surveyValue.qn11 == "I seldom take them as prescribed") {
      this.mark.push(10);
    }
  }
  qn10Result(surveyValue: survey) {
    if (surveyValue.qn10 == "Excellent") {
      this.mark.push(100);
    } else if (surveyValue.qn10 == "Good") {
      this.mark.push(70);
    } else if (surveyValue.qn10 == "Average") {
      this.mark.push(40);
    } else if (surveyValue.qn10 == "Poor") {
      this.mark.push(10);
    }
  }
  qn9Result(surveyValue: survey) {
    if (surveyValue.qn9 == "Not all") {
      this.mark.push(100);
    } else if (surveyValue.qn9 == "Several days") {
      this.mark.push(70);
    } else if (surveyValue.qn9 == "More days than not") {
      this.mark.push(50);
    } else if (surveyValue.qn9 == "Nearly every day") {
      this.mark.push(10);
    }
  }
  qn8Result(surveyValue: survey) {
    if (surveyValue.qn8 == "Not all") {
      this.mark.push(100);
    } else if (surveyValue.qn8 == "Several days") {
      this.mark.push(70);
    } else if (surveyValue.qn8 == "More days than not") {
      this.mark.push(50);
    } else if (surveyValue.qn8 == "Nearly every day") {
      this.mark.push(10);
    }
  }
  qn7Result(surveyValue: survey) {
    if (surveyValue.qn7 == "Not all") {
      this.mark.push(100);
    } else if (surveyValue.qn7 == "Several days") {
      this.mark.push(70);
    } else if (surveyValue.qn7 == "More days than not") {
      this.mark.push(50);
    } else if (surveyValue.qn7 == "Nearly every day") {
      this.mark.push(10);
    }
  }
  qn6Result(surveyValue: survey) {
    if (surveyValue.qn6 == "I am not habituated to either") {
      this.mark.push(100);
    } else if (surveyValue.qn6 == "Yes to both") {
      this.mark.push(0);
    } else if (surveyValue.qn6 == "Only to drugs") {
      this.mark.push(50);
    } else if (surveyValue.qn6 == "Only to alcohol") {
      this.mark.push(50);
    }
  }
  qn5Result(surveyValue: survey) {
    if (surveyValue.qn5 == "None") {
      this.mark.push(100);
    } else {
      this.mark.push(10);
    }
  }
  qn4Result(surveyValue: survey) {
    if (surveyValue.qn4 == "Yes") {
      this.mark.push(10);
    } else if (surveyValue.qn4 == "No") {
      this.mark.push(100);
    }
  }
  qn3Result(surveyValue: survey) {
    if (surveyValue.qn3 == "Having Good Physical Health") {
      this.mark.push(100);
    } else if (surveyValue.qn3 == "Moderately physically impaired") {
      this.mark.push(80);
    } else if (surveyValue.qn3 == "Severely physically impaired") {
      this.mark.push(60);
    } else if (surveyValue.qn3 == "Only when needed") {
      this.mark.push(40);
    } else if (surveyValue.qn3 == "Totally physically impaired") {
      this.mark.push(20);
    }
  }
  qn2Result(surveyValue: survey) {
    if (surveyValue.qn2 == "Once in 3 months") {
      this.mark.push(100);
    } else if (surveyValue.qn2 == "Once in 6 months") {
      this.mark.push(80);
    } else if (surveyValue.qn2 == "Once a year") {
      this.mark.push(60);
    } else if (surveyValue.qn2 == "Only when needed") {
      this.mark.push(40);
    } else if (surveyValue.qn2 == "Never get it done") {
      this.mark.push(20);
    }
  }
  qn1Result(surveyValue: survey) {
    for (var i = 1; i <= 10; i++) {
      if (surveyValue.qn1 == i) {
        this.mark.push(i * 10);
      }
    }
  }
}
