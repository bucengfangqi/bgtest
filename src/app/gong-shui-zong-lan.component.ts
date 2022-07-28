
import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { format } from 'date-fns';
import { getRandom } from '../shui-chang-dong-tai/charts-config';
@Component({
  selector: 'gong-shui-zong-lan',
  templateUrl: './gong-shui-zong-lan.component.html',
  styleUrls: ['./gong-shui-zong-lan.component.less']
})
export class GongShuiZongLanComponent implements OnInit {
  ngOnInit(): void {
  }


  options = [
    { name: '进水流量' },
    { name: '出厂压力' },
    { name: '出厂浊度' },
    { name: '出厂余氯' },
    { name: '出厂PH' }
  ]
  selectedOption = [
    this.options[0],
    this.options[0],
    this.options[0],
  ];

  circleData = [
    [
      { data: 47, color: '#70b603' },
      { data: '', color: '#ccc' },
      { data: 48, color: '#70b603' },
      { data: '', color: '#d9001b' },
      { data: '', color: '#ccc' },
      { data: '', color: '#ccc' },
      { data: 40, color: '#70b603' },
      { data: '', color: '#ccc' },
      { data: 47, color: '#70b603' },
    ],
    [
      { data: 49, color: '#70b603' },
      { data: '', color: '#ccc' },
      { data: 46, color: '#70b603' },
      { data: '', color: '#ccc' },
      { data: '', color: '#ccc' },
      { data: 41, color: '#70b603' },
      { data: 45, color: '#70b603' },
      { data: '', color: '#ccc' },
    ],
    [
      { data: 43, color: '#70b603' },
      { data: 45, color: '#70b603' },
      { data: '', color: '#ccc' },
      { data: 41, color: '#70b603' },
      { data: '', color: '#ccc' },
      { data: 45, color: '#70b603' },
      { data: 45, color: '#70b603' },
      { data: '', color: '#ccc' },
      { data: '', color: '#ccc' },
    ],
  ]

  chartsData = [
    {
      chuchangzhibiao: [3584.45, 0.32, 0.22, 0.41],
      title: '第一水厂',
      id_line: 'line-one',
      y_line: {
        min: '10000',
        max: '40000'
      },
    },
    {
      chuchangzhibiao: [2856.45, 0.38, 0.32, 0.29],
      title: '第二水厂',
      id_line: 'line-two',
      y_line: {
        min: '10000',
        max: '30000'
      }
    },
    {
      chuchangzhibiao: [3954.23, 0.37, 0.29, 0.5],
      title: '第三水厂',
      id_line: 'line-three',
      y_line: {
        min: '10000',
        max: '30000'
      }
    }
  ]
  ngAfterViewInit(): void {
    this.initCharts(this.chartsData[0], 0)
    this.initCharts(this.chartsData[1], 0)
    this.initCharts(this.chartsData[2], 0)
  }
  title = 'app';
  initCharts(chartsData, sub_i) {
    const ec = echarts as any;
    let lineChart = ec.init(document.getElementById(chartsData.id_line));

    const now = new Date().getTime();
    const hours = [];
    const data1 = [];
    const data2 = [];

    if (sub_i === 0) {
      for (let i = 0; i < new Date().getHours(); i++) {
        const time = now - i * 1000 * 60 * 60;
        hours.unshift(format(time, 'HH:00'));
        data1.unshift(getRandom(15000, 15000));
        data2.unshift(getRandom(15000, 15000));
      }
    } else if (sub_i === 4) {
      for (let i = 0; i < new Date().getHours(); i++) {
        const time = now - i * 1000 * 60 * 60;
        hours.unshift(format(time, 'HH:00'));
        data1.unshift(getRandom(10, 70) / 10);
        data2.unshift(getRandom(10, 70) / 10);
      }
    } else {
      for (let i = 0; i < new Date().getHours(); i++) {
        const time = now - i * 1000 * 60 * 60;
        hours.unshift(format(time, 'HH:00'));
        data1.unshift(getRandom(30, 50) / 100);
        data2.unshift(getRandom(30, 50) / 100);
      }
    }


    let lineOption = {
      xAxis: {
        data: hours,
        axisLabel: {
          show: true,
          interval: 0,
        }

      },
      yAxis: {
        type: 'value',
        splitLine: false
      },
      grid: {
        left: "10%",
        top: "10%",
        right: "5%",
        bottom: "15%"
      },
      series: [
        {
          data: data1,
          type: 'line',
          showSymbol: false,
          lineStyle: {
            width: 1,
          }
        },
        {
          data: data2,
          type: 'line',
          showSymbol: false,
          lineStyle: {
            width: 1,
          }
        }
      ]
    };
    lineChart.setOption(lineOption);

    window.addEventListener("resize", function () {
      lineChart.resize();
    });

  }

  changeData(i, sub_i) {
    this.initCharts(this.chartsData[i], sub_i);
    this.selectedOption[i] = this.options[sub_i];
    
  }
}
