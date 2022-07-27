import { Component, OnInit, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexFill,
  ApexDataLabels,
  ApexLegend,
} from "ng-apexcharts";
export type ChartOptions = {
  series: any;
  chart: any;
  responsive: any;
  labels: any;
  fill: any;
  legend: ApexLegend;
  dataLabels: any;
};

@Component({
  selector: "app-survey-sucess-donut",
  templateUrl: "./survey-sucess-donut.component.html",
  styleUrls: ["./survey-sucess-donut.component.css"],
})
export class SurveySucessDonutComponent implements OnInit {
  ngOnInit(): void {}
  @ViewChild("chart") chart: any;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [44, 0, 0, 0],
      chart: {
        width: 380,
        type: "donut",
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
      },
      legend: {
        formatter: function (val, opts) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex];
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    };
  }
}
