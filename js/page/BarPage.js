import React from 'react';
import {ScrollView, View} from 'react-native';

import ChartView from '../chart/ChartView';

interface IProps {
  navigation: any;
}

const barData1 = [
  {
    year: '1951 年',
    sales: 38,
  },
  {
    year: '1952 年',
    sales: 52,
  },
  {
    year: '1956 年',
    sales: 61,
  },
  {
    year: '1957 年',
    sales: 145,
  },
  {
    year: '1958 年',
    sales: 48,
  },
  {
    year: '1959 年',
    sales: 38,
  },
  {
    year: '1960 年',
    sales: 38,
  },
  {
    year: '1962 年',
    sales: 38,
  },
];

const barData2 = [
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
 * 条形图 实例
 */
export default class BarPage extends React.Component {


  render() {
    return (
      <ScrollView>
        <View>
          <View style={{height: 300}}>
            <ChartView
              data={barData1}
              chartJS={this.renderBarChart1(barData1)}
            />
          </View>
          <View style={{height: 300}}>
            <ChartView
              data={barData2}
              chartJS={this.renderBarChart2(barData2)}
            />
          </View>
        </View>
      </ScrollView>
    );
  }

  renderBarChart1(data) {
    const script = `
  (function(){
    // Step 1: 创建 Chart 对象
    const chart = new F2.Chart({
      id: 'chart',
      pixelRatio: window.devicePixelRatio // 指定分辨率
    });
    
    chart.source(${JSON.stringify(data)}, {
      sales: {
        tickCount: 5
      }
    });
    chart.coord({
      transposed: true
    });
    chart.tooltip({
      showItemMarker: false,
      onShow: function onShow(ev) {
        const items = ev.items;
        items[0].name = null;
        items[0].name = items[0].title;
        items[0].value = '¥ ' + items[0].value;
      }
    });
    chart.interval().position('year*sales');
    chart.render();
  })();
  `;
    return script;
  }

  renderBarChart2(data) {
    const script = `
  (function(){
    const chart = new F2.Chart({
      id: 'chart',
      pixelRatio: window.devicePixelRatio
    });
    
    chart.source(${JSON.stringify(data)}, {
      月均降雨量: {
        tickCount: 5
      }
    });
    chart.coord({
      transposed: true
    });
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
    chart.interval()
      .position('月份*月均降雨量')
      .color('name')
      .adjust('stack');
    chart.render();
  })();
  `;
    return script;
  }
}
