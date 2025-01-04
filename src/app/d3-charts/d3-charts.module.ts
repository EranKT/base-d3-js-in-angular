import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { D3ChartsComponent } from './d3-charts.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';



@NgModule({
  declarations: [
    D3ChartsComponent,
    ScatterChartComponent,
    PieChartComponent,
    BarChartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class D3ChartsModule { }
