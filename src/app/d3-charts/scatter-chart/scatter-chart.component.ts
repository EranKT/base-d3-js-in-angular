import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scatter-chart',
  templateUrl: './scatter-chart.component.html',
  styleUrl: './scatter-chart.component.scss'
})
export class ScatterChartComponent {

  constructor(private router: Router) { }

  backToMain() {
    this.router.navigateByUrl('');

  }
}
