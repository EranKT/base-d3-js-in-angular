import { Component, Input } from '@angular/core';
import { chartMockData } from '../charts-mock-data';
import * as d3 from 'd3';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent {
  @Input() isPreview: boolean = false;

  private svg: any;
  private margin: number = 50;
  private width: number = 750 - (this.margin * 2);
  private height: number = 400 - (this.margin * 2);
  private chartData: any = chartMockData;

  private createSvg(): void {
    this.svg = d3.select("figure#bar")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + (this.isPreview ? this.margin * 5 : this.margin) + "," + this.margin + ")");
  }

  private drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3.scaleBand()
      .range([0, (this.isPreview ? this.width / 2 : this.width)])
      .domain(data.map(d => d.network))
      .padding(this.isPreview ? 0.05 : 0.2);

    // Draw the X-axis on the DOM
    this.svg.append("g")
      .attr("transform", "translate(0," + (this.isPreview ? this.height / 2 : this.height) + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("font-size", this.isPreview ? 5 : 10)
      .style("text-anchor", "end");

    // Create the Y-axis band scale
    const y = d3.scaleLinear()
      .domain([0, 200000])
      .range([(this.isPreview ? this.height / 2 : this.height), 0]);

    // Draw the Y-axis on the DOM
    this.svg.append("g")
      .call(d3.axisLeft(y))
      .style("font-size", this.isPreview ? 5 : 10)
      ;

    // Create and fill the bars
    this.svg.selectAll("bars")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d: any) => x(d.network))
      .attr("y", (d: any) => y(d.users))
      .attr("width", x.bandwidth())
      .attr("height", (d: any) => (this.isPreview ? this.height / 2 : this.height) - y(d.users))
      .attr("fill", "#d04a35");
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.margin = (this.isPreview ? 5 : 50);
    this.width = (this.isPreview ? 250 : 750) - (this.margin * 2);
    this.height = (this.isPreview ? 200 : 400) - (this.margin * 2);

    this.createSvg();
    this.drawBars(this.chartData);
  }

  backToMain() {
    this.router.navigateByUrl('');

  }
}
