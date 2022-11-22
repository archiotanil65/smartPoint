import { AfterViewInit, Component, Inject, Input, OnInit } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { ChartData, ChartType } from 'chart.js';
import { SubChartService } from '../service/sub-chart.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-sub-chart',
  templateUrl: './sub-chart.component.html',
  styleUrls: ['./sub-chart.component.css']
})
export class SubChartComponent implements AfterViewInit {

  dataset: any = [];
  amountSpent:number [] = [];
  public doughnutChartLabels: string[] = [];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartData:ChartData<'doughnut'> ={
    datasets: []
  };
  //catId:string = "1";

  constructor(public postData:SubChartService,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngAfterViewInit(): void {

    this.dataset = this.data.dataKey;
    this.dataset.CategoryId = '2';
    console.log(this.dataset);
    this.doughnutChartLabels = [];
    this.amountSpent = [];
    this.postData.callSubChartApi(this.dataset).subscribe((data: any) => {
      for(const values of data.responseData)
        {
          this.doughnutChartLabels.push(values.SubCategoryName);
          this.amountSpent.push(values.AmountSpent);
        }
        this.doughnutChartData= {
          labels: this.doughnutChartLabels,
          datasets: [
            { data: this.amountSpent},
          ]
        };
    })
  }

}
