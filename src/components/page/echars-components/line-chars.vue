<template>
    <div class="chars-box">                  
        <div id="myChart" :style="{width: '100%', height: '300px',background:'#fff',marginTop:'20px'}"></div>      
    </div>
</template>
<script>
import Schart from "vue-schart";
// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/bar");
require("echarts/lib/chart/line");
// 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
import "echarts/lib/component/legend";
export default {
  name: "line-chars",
  data: () => {
    return {
      myOption: {
        title: {
          text: "用户统计图"
          // subtext: 'x轴：时间，y轴：用户数'
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["总用户", "实名用户", "活跃量"]
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: "none"
            },
            dataView: { readOnly: false },
            magicType: { type: ["line", "bar"] },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "2018/7/1",
            "2018/7/2",
            "2018/7/3",
            "2018/7/4",
            "2018/7/5",
            "2018/7/6",
            "2018/7/7"
          ]
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value}"
          }
        },
        series: [
          {
            name: "总用户",
            type: "line",
            itemStyle: {
              normal: {
                  color: "#8fdcdd",
                lineStyle: {
                  color: "#8fdcdd"
                }
              }
            },
            data: [500, 600, 1500, 550, 800, 700, 1500],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          },
          {
            name: "实名用户",
            type: "line",
            itemStyle: {
              normal: {
                color: "#d3c9e7",
                lineStyle: {   
                  color: "#d3c9e7"
                }
              }
            },
            data: [473, 400, 650, 550, 473, 600, 1500],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          },
          {
            name: "活跃量",
            type: "line",
            itemStyle: {                
              normal: {
                color: "#a5d1f0",
                lineStyle: {
                  color: "#a5d1f0"
                }
              }
            },
            data: [200, 1500, 473, 880, 400, 950, 700],
            markPoint: {
              data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }]
            },
            markLine: {
              data: [
                { type: "average", name: "平均值" },
                [
                  {
                    symbol: "none",
                    x: "90%",
                    yAxis: "max"
                  },
                  {
                    symbol: "circle",
                    label: {
                      normal: {
                        position: "start",
                        formatter: "最大值"
                      }
                    },
                    type: "max",
                    name: "最高点"
                  }
                ]
              ]
            }
          }
        ]
      },
      charts: ""
    };
  },
  mounted() {
    let _this = this;
    // 基于准备好的dom，初始化echarts实例
    this.charts = echarts.init(document.getElementById("myChart"));
    // 绘制图表
    this.charts.setOption(this.myOption);
    window.addEventListener("resize", function(event) {
      _this.charts.resize();
    });
  }
};
</script>
<style scoped>
/* .chars-box {
  background: #fff;
  padding: 10px;
} */
</style>