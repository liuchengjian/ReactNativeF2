import React from 'react';
import {ScrollView, View} from 'react-native';

import ChartView from '../chart/ChartView';

interface IProps {
  navigation: any;
}

const histogramData1 = [
  {genre: '一月', sold: 275},
  {genre: '二月', sold: 115},
  {genre: '三月', sold: 120},
  {genre: '四月', sold: 350},
  {genre: '五月', sold: 190},
];

const histogramData2 = [
  {
    name: '伦敦',
    月份: '1月',
    月均降雨量: 18.9,
  },
  {
    name: '伦敦',
    月份: '2月',
    月均降雨量: 28.8,
  },
  {
    name: '伦敦',
    月份: '3月',
    月均降雨量: 39.3,
  },
  {
    name: '伦敦',
    月份: '4月',
    月均降雨量: 81.4,
  },
  {
    name: '伦敦',
    月份: '5月',
    月均降雨量: 47,
  },
  {
    name: '伦敦',
    月份: '6月',
    月均降雨量: 20.3,
  },
  {
    name: '伦敦',
    月份: '7月',
    月均降雨量: 24,
  },
  {
    name: '伦敦',
    月份: '8月',
    月均降雨量: 35.6,
  },
  {
    name: '柏林',
    月份: '1月',
    月均降雨量: 12.4,
  },
  {
    name: '柏林',
    月份: '2月',
    月均降雨量: 23.2,
  },
  {
    name: '柏林',
    月份: '3月',
    月均降雨量: 34.5,
  },
  {
    name: '柏林',
    月份: '4月',
    月均降雨量: 99.7,
  },
  {
    name: '柏林',
    月份: '5月',
    月均降雨量: 52.6,
  },
  {
    name: '柏林',
    月份: '6月',
    月均降雨量: 35.5,
  },
  {
    name: '柏林',
    月份: '7月',
    月均降雨量: 37.4,
  },
  {
    name: '柏林',
    月份: '8月',
    月均降雨量: 42.4,
  },
];
/**
 * Author:liurui
 * date: 2020-7-7
 * 柱状图 实例
 */
export default class HistogramPage extends React.Component {



  render(){
    return (
      <ScrollView>
        <View>
          <View style={{height: 300}}>
            <ChartView
              data={histogramData1}
              chartJS={this.renderHistogramChart1(histogramData1)}
            />
          </View>
          <View style={{height: 300}}>
            <ChartView
              data={histogramData2}
              chartJS={this.renderHistogramChart2(histogramData2)}
            />
          </View>
        </View>
      </ScrollView>
    );
  }

  renderHistogramChart1(data) {
    const script = `
  (function(){
    // Step 1: 创建 Chart 对象
    const chart = new F2.Chart({
      id: 'chart',
      pixelRatio: window.devicePixelRatio // 指定分辨率
    });
    
    // Step 2: 载入数据源
    chart.source(${JSON.stringify(data)});
    
    // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，
    //genre 映射至 x 轴，sold 映射至 y 轴
    chart.interval()
      .position('genre*sold')
      .color('genre');
    
    // Step 4: 渲染图表
    chart.render();
  })();
  `;
    return script;
  }

  renderHistogramChart2(data) {
    const script = `
  (function(){
    // Step 1: 创建 Chart 对象
    const chart = new F2.Chart({
      id: 'chart',
      pixelRatio: window.devicePixelRatio // 指定分辨率
    });
    
    // Step 2: 载入数据源
    chart.source(${JSON.stringify(data)});
    
    // Step 3：创建tooltip
    chart.tooltip({
      custom: true, // 自定义 tooltip 内容框
      onChange: function onChange(obj) {
        const legend = chart.get('legendController').legends.top[0];
        const tooltipItems = obj.items;
        const legendItems = legend.items;
        const map = {};
        legendItems.forEach(function(item) {
          map[item.name] = _.clone(item);
        });
        tooltipItems.forEach(function(item) {
          const name = item.name;
          const value = item.value;
          if (map[name]) {
            map[name].value = value;
          }
        });
        
        legend.setItems(_.values(map));
      },
      onHide: function onHide() {
        const legend = chart.get('legendController').legends.top[0];
        legend.setItems(chart.getLegendItems().country);
      }
    });
    
    // Step 4：创建图形语法，绘制柱状图
    chart.interval()
      .position('月份*月均降雨量')
      .color('name')
      .adjust({
        type: 'dodge',
        marginRatio: 0.05 // 设置分组间柱子的间距
      });
    
    // Step 5: 渲染图表
    chart.render();
  })();
  `;
    return script;
  }
}
