import { TreeChartDataModel } from "./charts-models";

export const chartMockData = [
  { "network": "Facebook", "users": "166443", "Released": "2010" },
  { "network": "Instagram", "users": "150793", "Released": "2013" },
  { "network": "X", "users": "62342", "Released": "2019" },
  { "network": "Snapchat", "users": "27647", "Released": "2015" },
  { "network": "TikTok", "users": "121471", "Released": "2016" }
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
          children: [{
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
                        children: [{
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
                                  children: [{
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
                                  }]
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
                                      children: [{
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
                                      }]
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
                                  children: [{
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
                                  }]
                                },
                                {
                                  name: "C5",
                                  value: 300,
                                  children: [{
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
                                  }]
                                },
                                {
                                  name: "C6",
                                  value: 200,
                                  children: [
                                    {
                                      name: "D3",
                                      value: 100,
                                      children: [{
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
                                      }]
                                    },
                                    {
                                      name: "D4",
                                      value: 300,
                                      children: [{
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
                                                    children: [{
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
                                                              children: [{
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
                                                              }]
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
                                                                  children: [{
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
                                                                  }]
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
                                                              children: [{
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
                                                              }]
                                                            },
                                                            {
                                                              name: "C5",
                                                              value: 300,
                                                              children: [{
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
                                                              }]
                                                            },
                                                            {
                                                              name: "C6",
                                                              value: 200,
                                                              children: [
                                                                {
                                                                  name: "D3",
                                                                  value: 100,
                                                                  children: [{
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
                                                                                children: [{
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
                                                                                          children: [{
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
                                                                                          }]
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
                                                                                              children: [{
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
                                                                                              }]
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
                                                                                          children: [{
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
                                                                                          }]
                                                                                        },
                                                                                        {
                                                                                          name: "C5",
                                                                                          value: 300,
                                                                                          children: [{
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
                                                                                          }]
                                                                                        },
                                                                                        {
                                                                                          name: "C6",
                                                                                          value: 200,
                                                                                          children: [
                                                                                            {
                                                                                              name: "D3",
                                                                                              value: 100,
                                                                                              children: [{
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
                                                                                              }]
                                                                                            },
                                                                                            {
                                                                                              name: "D4",
                                                                                              value: 300,
                                                                                              children: [{
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
                                                                                              }]
                                                                                            }
                                                                                          ]
                                                                                        }
                                                                                      ]
                                                                                    }
                                                                                  ]
                                                                                }]
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
                                                                  }]
                                                                },
                                                                {
                                                                  name: "D4",
                                                                  value: 300,
                                                                  children: [{
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
                                                                  }]
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        }
                                                      ]
                                                    }]
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
                                      }]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }]
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
          }]
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
              children: [{
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
              }]
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
          children: [{
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
          }]
        },
        {
          name: "C5",
          value: 300,
          children: [{
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
          }]
        },
        {
          name: "C6",
          value: 200,
          children: [
            {
              name: "D3",
              value: 100,
              children: [{
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
              }]
            },
            {
              name: "D4",
              value: 300,
              children: [{
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
              }]
            }
          ]
        }
      ]
    }
  ]
};
