import { style } from "@angular/animations";
import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  Type,
} from "@angular/core";
import { FormControl } from "@angular/forms";
import { MainChartService } from "src/app/service/main-chart.service";
import { NgChartsModule } from 'ng2-charts';
import { ChartData, ChartType } from 'chart.js';
import { MatDialog } from '@angular/material/dialog';
import { SubChartComponent } from "../sub-chart/sub-chart.component";


@Component({
  selector: "app-main-chart",
  templateUrl: "./main-chart.component.html",
  styleUrls: ["./main-chart.component.css"],
})
export class MainChartComponent implements OnInit, OnChanges {
  startDate = new FormControl(new Date());
  endDate = new FormControl(new Date());
  dataset: any = [];
  amountSpent:number [] = [];
  public doughnutChartLabels: string[] = [];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartData:ChartData<'doughnut'> ={
    datasets: []
  };
  obj:any;
  obj1 = 1;

  constructor(private postData: MainChartService,public dialog: MatDialog) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.get();
  }

  ngOnInit(): void {
    document.getElementById("chart").style.visibility = "hidden";
  }

  get() {
    let data1 = (document.getElementById("chart").style.visibility ="hidden");
    this.doughnutChartLabels = [];
    this.amountSpent = [];
    let startingDate: any = JSON.stringify(this.startDate.value);
    let endingDate: any = JSON.stringify(this.endDate.value);
    this.obj = {
      FromDate: startingDate.substring(1, 11),
      EndDate: endingDate.substring(1, 11),
    };
    this.postData.callMainChartApi(this.obj).subscribe((data: any) => {
      if (data.responseData != 0) {
        this.dataset = data.responseData;
        console.log(this.dataset);
        for(const values of this.dataset)
        {
          this.doughnutChartLabels.push(values.CategoryName);
          this.amountSpent.push(values.AmountSpent);
        }
        this.doughnutChartData= {
          labels: this.doughnutChartLabels,
          datasets: [
            { data: this.amountSpent},
          ]
        };
        let data1 = (document.getElementById("chart").style.visibility =
          "visible");
      } else if ((data.responseData = 0)) {
        document.getElementById("chart").style.visibility = "hidden";
        console.log("There is no data for the dates given");
      }
    });
  }

  public chartClicked(evt):void {
    
    //const points = chart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);
    //console.log("points",points);
      const dialogRef = this.dialog.open(SubChartComponent,{
        data: {
          dataKey: this.obj
        }
      });
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
