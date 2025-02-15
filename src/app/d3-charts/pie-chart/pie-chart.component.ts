import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { chartMockData } from '../charts-mock-data';
import * as d3 from 'd3';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent {
  @Input() isPreview: boolean = false;

  private chartData = chartMockData;
  private svg: any;
  private margin: number = 50;
  private width: number = 750;
  private height: number = 600;
  // The radius of the pie chart is half the smallest side
  private radius = Math.min(this.width, this.height) / 2 - this.margin;
  private colors: any;

  private createSvg(): void {
    this.svg = d3.select("figure#pie")
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .append("g")
      .attr(
        "transform",
        "translate(" + this.width / 2 + "," + this.height / 2 + ")"
      );
  }

  private createColors(): void {
    this.colors = d3.scaleOrdinal()
      .domain(this.chartData.map(d => d.users.toString()))
      .range(["#c7d3ec", "#a5b8db", "#879cc4", "#677795", "#5a6782"]);
  }

  private drawChart(): void {
    // Compute the position of each group on the pie:
    const pie = d3.pie<any>().value((d: any) => Number(d.users));

    // Build the pie chart
    this.svg
      .selectAll('pieces')
      .data(pie(this.chartData))
      .enter()
      .append('path')
      .attr('d', d3.arc()
        .innerRadius(0)
        .outerRadius(this.radius)
      )
      .attr('fill', (d: any, i: any) => (this.colors(i)))
      .attr("stroke", "#121926")
      .style("stroke-width", "1px");

    // Add labels
    const labelLocation = d3.arc()
      .innerRadius(this.isPreview ? 20 : 100)
      .outerRadius(this.radius);

    this.svg
      .selectAll('pieces')
      .data(pie(this.chartData))
      .enter()
      .append('text')
      .text((d: any) => d.data.network)
      .attr("transform", (d: any) => "translate(" + labelLocation.centroid(d) + ")")
      .style("text-anchor", "middle")
      .style("font-size", this.isPreview ? 5 : 15);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.margin = (this.isPreview ? 5 : 50);
    this.width = (this.isPreview ? 165 : 750) - (this.margin * 2);
    this.height = (this.isPreview ? 160 : 600) - (this.margin * 2);
    this.radius = Math.min(this.width, this.height) / 2 - this.margin;

    this.createSvg();
    this.createColors();
    this.drawChart();
  }
  backToMain() {
    this.router.navigateByUrl('');

  }
}
