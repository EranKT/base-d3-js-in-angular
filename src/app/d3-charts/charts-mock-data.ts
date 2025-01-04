import { TreeChartDataModel } from "./charts-models";

export const chartMockData = [
  { "Framework": "Vue", "Stars": "166443", "Released": "2014" },
  { "Framework": "React", "Stars": "150793", "Released": "2013" },
  { "Framework": "Angular", "Stars": "62342", "Released": "2016" },
  { "Framework": "Backbone", "Stars": "27647", "Released": "2010" },
  { "Framework": "Ember", "Stars": "21471", "Released": "2011" }
]

export const treeChartMockData: TreeChartDataModel = {
  name: "A1",
  value: 100,
  children: [
    {
      name: "B1",
      value: 100,
      children: [
        {
          name: "C1",
          value: 100,
          children: undefined
        },
        {
          name: "C2",
          value: 300,
          children: [
            {
              name: "D1",
              value: 100,
              children: undefined
            },
            {
              name: "D2",
              value: 300,
              children: undefined
            }
          ]
        },
        {
          name: "C3",
          value: 200,
          children: undefined
        }
      ]
    },
    {
      name: "B2",
      value: 200,
      children: [
        {
          name: "C4",
          value: 100,
          children: undefined
        },
        {
          name: "C5",
          value: 300,
          children: undefined
        },
        {
          name: "C6",
          value: 200,
          children: [
            {
              name: "D3",
              value: 100,
              children: undefined
            },
            {
              name: "D4",
              value: 300,
              children: undefined
            }
          ]
        }
      ]
    }
  ]
};
