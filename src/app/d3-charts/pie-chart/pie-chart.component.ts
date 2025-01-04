import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent {

  constructor(private router: Router) { }

  backToMain() {
    this.router.navigateByUrl('');

  }
}
