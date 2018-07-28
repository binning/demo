<template>
    <div class="chars-box">    
        <el-col :span="12" style="margin-top:20px">                      
            <div id="barChart" :style="{width: '100%', height: '300px',background:'#fff',marginTop:'20px'}"></div>   
        </el-col>           
        <el-col :span="12" style="margin-top:20px">                      
            <div id="barChart1" :style="{width: '100%', height: '300px',background:'#fff',marginTop:'20px'}"></div>   
        </el-col>      
    </div>
</template>
<script>
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
  name: "bar-chars",
  data: () => {
    return {
      myOption: {
        title: {
          text: "一周每天贷款量"
          // subtext: 'x轴：时间，y轴：用户数'
        },
        color: ["#a8d4f3"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "60%",
            data: [10, 52, 200, 334, 390, 330, 220]
          }
        ]
      },
      myOption1: {
        title: {
          text: "一天放贷量"
          // subtext: 'x轴：时间，y轴：用户数'
        },
        color: ["#d3c9e7"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: [
              "08:00",
              "09:00",
              "10:00",
              "11:00",
              "12:00",
              "13:00",
              "14:00",
              "15:00",
              "16:00",
              "17:00"
            ],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "60%",
            data: [10, 52, 200, 334, 390, 330, 220, 52, 200, 334,]
          }
        ]
      },
      charts: "",
      charts1: ""
    };
  },
  mounted() {
    let _this = this;
    // 基于准备好的dom，初始化echarts实例
    this.charts = echarts.init(document.getElementById("barChart"));
    // 绘制图表
    this.charts.setOption(this.myOption);
    this.charts1 = echarts.init(document.getElementById("barChart1"));
    this.charts1.setOption(this.myOption1);
    window.addEventListener("resize", function(event) {
      _this.charts.resize();
      _this.charts1.resize();
    });
  }
};
</script>
<style scoped>
.chars-box {
  background: #fff;
  padding: 10px;
}
</style>