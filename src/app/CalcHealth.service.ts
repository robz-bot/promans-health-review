import { survey } from "./Pages/survey/survey";

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class calcHealthService {
  private mark: number[] = [];
  private result: number = 0;
  constructor() {}

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

    this.result = this.mark.reduce((accumulator, current) => {
      return accumulator + current;
    }, 0);

    return this.result;
  }
  qn11Result(surveyValue: survey) {
    if (surveyValue.qn11 == "I do not have to take medicine") {
      this.mark.push(100);
    } else if (surveyValue.qn9 == "I always take them as prescribed") {
      this.mark.push(70);
    
    } else if (surveyValue.qn9 == "Sometimes I take them as prescribed") {
      this.mark.push(30);
    
    } else if (surveyValue.qn9 == "I seldom take them as prescribed") {
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
        console.log(this.mark);
      }
    }
  }
}
