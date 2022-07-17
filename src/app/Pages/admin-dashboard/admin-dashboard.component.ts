import { Component, OnInit, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexLegend,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  legend: ApexLegend;
  
};
@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.css"],
})
export class AdminDashboardComponent implements OnInit {
  @ViewChild("chart")
  chart!: ChartComponent;
  public chartOptions: any;
  constructor() {
    this.chartOptions = {
      series: [
        44, 55, 13, 43, 22, 44, 55, 13, 43, 22, 44, 55, 13, 43, 22, 44, 55, 13,
        43, 22,
      ],
      chart: {
        width: 500,
        type: "donut",
      },
      labels: [
        "Qn1",
        "Qn2",
        "Qn3",
        "Qn4",
        "Qn5",
        "Qn6",
        "Qn7",
        "Qn8",
        "Qn9",
        "Qn10",
        "Qn11",
        "Qn12",
        "Qn13",
        "Qn14",
        "Qn15",
        "Qn16",
        "Qn17",
        "Qn18",
        "Qn19",
        "Qn20",
      ],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 500,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    };
  }

  ngOnInit(): void {}
}
