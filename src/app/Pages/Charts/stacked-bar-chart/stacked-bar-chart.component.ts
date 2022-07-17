import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexFill,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
  fill: ApexFill;
  legend: ApexLegend;
};

@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.css']
})
export class StackedBarChartComponent implements OnInit {
  ngOnInit(): void {}
  @ViewChild("chart") chart: any;
  public chartOptions:any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "When did you most recently become ill or apply for a leave of absence?",
          //data:[2020,2021,2022]
          data: [44, 55, 41]
        },
        {
          name: "Qn2",
          data: [53, 32, 33]
        },
        {
          name: "Qn3",
          data: [12, 17, 11]
        },
        {
          name: "Qn4",
          data: [9, 7, 5]
        },
        {
          name: "Qn5",
          data: [25, 12, 19]
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        stackType: "100%"
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      title: {
        text: "Year-wise comparison Survey"
      },
      xaxis: {
        categories: [2022, 2021, 2021]
      },
      tooltip: {
        y: {
          formatter: function(val: string) {
            return val + "K";
          }
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        offsetX: 40
      }
    };
  }

}
