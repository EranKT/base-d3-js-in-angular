export enum BarsTypesEnum {
  bar = 'bar',
  pie = 'pie',
  scatter = 'scatter',
  tree = 'tree',
}

export const BarsTypesKeys = [
  'bar',
  'pie',
  'scatter',
  'tree'
];

export interface TreeChartDataModel {
  name: string;
  value: number;
  children?: Array<TreeChartDataModel>;
}
