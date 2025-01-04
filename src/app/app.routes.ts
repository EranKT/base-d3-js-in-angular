import { Routes } from '@angular/router';
import { D3ChartsComponent } from './d3-charts/d3-charts.component';
import { BarChartComponent } from './d3-charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './d3-charts/pie-chart/pie-chart.component';
import { ScatterChartComponent } from './d3-charts/scatter-chart/scatter-chart.component';

export const routes: Routes = [

  { path: 'main-page', component: D3ChartsComponent },
  { path: 'bar-chart/', component: BarChartComponent },
  { path: 'pie-chart/', component: PieChartComponent },
  { path: 'scatter-chart/', component: ScatterChartComponent },

  { path: '', component: D3ChartsComponent },
  { path: '**', component: D3ChartsComponent },
];
