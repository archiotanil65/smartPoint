import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './materialModule';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainChartComponent } from './main-chart/main-chart.component';
import { SubChartComponent } from './sub-chart/sub-chart.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    MainChartComponent,
    SubChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgChartsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
