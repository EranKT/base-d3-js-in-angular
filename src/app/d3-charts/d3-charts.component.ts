import { Component } from '@angular/core';
import { BarsTypesEnum, BarsTypesKeys } from './charts-models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-d3-charts',
  templateUrl: './d3-charts.component.html',
  styleUrl: './d3-charts.component.scss'
})
export class D3ChartsComponent {
  BarsTypesKeys = BarsTypesKeys;
  constructor(private router: Router) {

  }

  chartSelected(type: any) {
    let routeUrl: string = '';
    switch (type) {
      case BarsTypesEnum.bar:
        routeUrl = 'bar-chart/';
        break;
      case BarsTypesEnum.pie:
        routeUrl = 'pie-chart/';
        break;
      case BarsTypesEnum.scatter:
        routeUrl = 'scatter-chart/';
        break;

      default:
        break;
    }
    this.router.navigateByUrl(routeUrl);

  }
}
