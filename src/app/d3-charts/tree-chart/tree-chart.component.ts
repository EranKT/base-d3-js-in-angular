import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { treeChartMockData } from '../charts-mock-data';
import * as d3 from 'd3';

@Component({
  selector: 'app-tree-chart',
  standalone: true,
  imports: [],
  templateUrl: './tree-chart.component.html',
  styleUrl: './tree-chart.component.scss'
})
export class TreeChartComponent {
  @Input() isPreview: boolean = false;

  private chartData = treeChartMockData;
  // private svg: any;
  // private margin: number = 50;
  // private width: number = 750 - (this.margin * 2);
  // private height: number = 400 - (this.margin * 2);

  root: any;
  tree: any;
  treeLayout: any;
  svg: any;

  treeData: any;

  height: number;
  width: number;
  margin: any = { top: 200, bottom: 90, left: 100, right: 90 };
  duration: number = 750;
  nodeWidth: number = 5;
  nodeHeight: number = 5;
  nodeRadius: number = 5;
  horizontalSeparationBetweenNodes: number = 5;
  verticalSeparationBetweenNodes: number = 5;
  nodeTextDistanceY: string = "-5px";
  nodeTextDistanceX: number = 5;

  dragStarted: boolean;
  draggingNode: any;
  nodes: any[];
  selectedNodeByDrag: any;

  selectedNodeByClick: any;
  previousClickedDomNode: any;
  links: any;


  private createSvg(): void {
    this.svg = d3.select("figure#tree")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + (this.isPreview ? this.margin * 6 : this.margin) + "," + this.height / 1.5 + ")");
  }




  constructor(private router: Router) { }

  ngOnInit(): void {
    this.margin = (this.isPreview ? 5 : 50);
    this.width = (this.isPreview ? 230 : 750) - (this.margin * 2);
    this.height = (this.isPreview ? 240 : 400) - (this.margin * 2);
    this.createSvg();
    this.renderTreeChart()
  }

  backToMain() {
    this.router.navigateByUrl('');

  }


  renderTreeChart() {

    // declares a tree layout and assigns the size
    this.tree = d3.tree()
      .size([this.height, this.width])
      .nodeSize([this.nodeWidth + this.horizontalSeparationBetweenNodes, this.nodeHeight + this.verticalSeparationBetweenNodes])
      .separation((a, b) => { return a.parent == b.parent ? 5 : 10 });

    // Assigns parent, children, height, depth
    this.root = d3.hierarchy(this.chartData, (d) => { return d.children; });
    this.root.x0 = this.height / 2;
    this.root.y0 = 10;

    // Collapse after the second level
    this.root.children.forEach(collapse);

    this.updateChart(this.root);

    function collapse(d: { children: null; _children: any[]; }) {
      if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
      } else {
        d.children = null;
        d._children = [];
      }
    }

  }

  click = (d: any) => {
    const element = d?.srcElement.__data__;
    if (element && (element?.children?.length > 0 || element?._children?.length > 0)) {
      if (element.children) {
        element._children = element.children;
        element.children = null;
      } else {
        element.children = element._children;
        element._children = null;
      }
      this.updateChart(element);
    }
  }

  updateChart(source: any) {
    let i = 0;
    this.treeData = this.tree(this.root);
    this.nodes = this.treeData.descendants();
    this.links = this.treeData.descendants().slice(1);
    this.nodes.forEach((d) => { d.y = d.depth * 100 });

    let node = this.svg.selectAll('g.node')
      .data(this.nodes, (d: { id: number; }) => { return d.id || (d.id = ++i); });

    let nodeEnter = node.enter().append('g')
      .attr('class', 'node')
      .attr('transform', (d: any) => {
        return 'translate(' + source.y0 + ',' + source.x0 + ')';
      })
      .on('click', this.click);

    nodeEnter.append('circle')
      .attr('class', 'node')
      .attr('r', 1e-6)
      .style('fill', (d: { _children: any; }) => {
        return d._children ? 'lightsteelblue' : '#fff';
      });

    nodeEnter.append('text')
      .attr('dy', '.35em')
      .attr('x', (d: { children: any; _children: any; }) => {
        return d.children || d._children ? -13 : 13;
      })
      .attr('text-anchor', (d: { children: any; _children: any; }) => {
        return d.children || d._children ? 'end' : 'start';
      })
      .style('font', '12px sans-serif')
      .text((d: { data: { name: any; }; }) => { return d.data.name; });

    let nodeUpdate = nodeEnter.merge(node);

    nodeUpdate.transition()
      .duration(this.duration)
      .attr('transform', (d: { y: string; x: string; }) => {
        return 'translate(' + d.y + ',' + d.x + ')';
      });

    nodeUpdate.select('circle.node')
      .attr('r', 10)
      .style('stroke-width', '3px')
      .style('stroke', 'steelblue')
      .style('fill', (d: { _children: any; }) => {
        return d._children ? 'lightsteelblue' : '#fff';
      })
      .attr('cursor', 'pointer');

    let nodeExit = node.exit().transition()
      .duration(this.duration)
      .attr('transform', (d: any) => {
        return 'translate(' + source.y + ',' + source.x + ')';
      })
      .remove();

    nodeExit.select('circle')
      .attr('r', 1e-6);

    nodeExit.select('text')
      .style('fill-opacity', 1e-6);

    let link = this.svg.selectAll('path.link')
      .data(this.links, (d: { id: any; }) => { return d.id; });

    let linkEnter = link.enter().insert('path', 'g')
      .attr('class', 'link')
      .style('fill', 'none')
      .style('stroke', '#ccc')
      .style('stroke-width', '2px')
      .attr('d', function (d: any) {
        let o = { x: source.x0, y: source.y0 };
        return diagonal(o, o);
      });

    let linkUpdate = linkEnter.merge(link);

    linkUpdate.transition()
      .duration(this.duration)
      .attr('d', (d: { parent: any; }) => { return diagonal(d, d.parent); });

    let linkExit = link.exit().transition()
      .duration(this.duration)
      .attr('d', function (d: any) {
        let o = { x: source.x, y: source.y };
        return diagonal(o, o);
      })
      .remove();

    this.nodes.forEach((d) => {
      d.x0 = d.x;
      d.y0 = d.y;
    });

    function diagonal(s: { x?: any; y?: any; parent?: any; }, d: { x: any; y: any; }) {
      let path = `M ${s.y} ${s.x}
                  C ${(s.y + d.y) / 2} ${s.x},
                  ${(s.y + d.y) / 2} ${d.x},
                  ${d.y} ${d.x}`;
      return path;
    }
  }
}
