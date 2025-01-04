import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import * as d3 from 'd3';
import { chartMockData } from '../charts-mock-data';

@Component({
  selector: 'app-scatter-chart',
  standalone: true,
  imports: [],
  templateUrl: './scatter-chart.component.html',
  styleUrl: './scatter-chart.component.scss'
})
export class ScatterChartComponent {
  @Input() isPreview: boolean = false;

  private chartData = chartMockData;
  private svg: any;
  private margin: number = 50;
  private width: number = 750 - (this.margin * 2);
  private height: number = 400 - (this.margin * 2);

  private createSvg(): void {
    this.svg = d3.select("figure#scatter")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + (this.isPreview ? this.margin * 6 : this.margin) + "," + this.margin + ")");
  }

  private drawPlot(): void {
    // Add X axis
    const x = d3.scaleLinear()
      .domain([2009, 2017])
      .range([0, (this.isPreview ? this.width / 2 : this.width)]);
    this.svg.append("g")
      .attr("transform", "translate(0," + (this.isPreview ? this.height / 2 : this.height) + ")")
      .call(d3.axisBottom(x).tickFormat(d3.format("d")))
      .style("font-size", this.isPreview ? 5 : 10);

    // Add Y axis
    const y = d3.scaleLinear()
      .domain([0, 200000])
      .range([(this.isPreview ? this.height / 2 : this.height), 0]);
    this.svg.append("g")
      .call(d3.axisLeft(y))
      .style("font-size", this.isPreview ? 5 : 10);

    // Add dots
    const dots = this.svg.append('g');
    dots.selectAll("dot")
      .data(this.chartData)
      .enter()
      .append("circle")
      .attr("cx", (d: any) => {
        let xAxis = x(d.Released);
        xAxis = xAxis - 1;
        return xAxis;
      })
      .attr("cy", (d: any) => y(d.Stars))
      .attr("r", this.isPreview ? 2 : 7)
      .style("opacity", .5)
      .style("fill", "#69b3a2");

    // Add labels
    dots.selectAll("text")
      .data(this.chartData)
      .enter()
      .append("text")
      .text((d: any) => d.Framework)
      .attr("x", (d: any) => {
        let xAxis = x(d.Released);
        xAxis = xAxis + 1;
        return xAxis;
      })
      .attr("y", (d: any) => y(d.Stars))
      .style("font-size", this.isPreview ? 5 : 15);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.margin = (this.isPreview ? 5 : 50);
    this.width = (this.isPreview ? 230 : 750) - (this.margin * 2);
    this.height = (this.isPreview ? 200 : 400) - (this.margin * 2);
    this.createSvg();
    this.drawPlot();
  }

  backToMain() {
    this.router.navigateByUrl('');

  }
}
