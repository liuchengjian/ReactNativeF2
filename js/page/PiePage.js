import React from 'react';
import {ScrollView, View} from 'react-native';

import ChartView from '../chart/ChartView';

interface IProps {
  navigation: any;
}
const pieMap1 = {
  芳华: '40%',
  妖猫传: '20%',
  机器之血: '18%',
  心理罪: '15%',
  寻梦环游记: '5%',
  其他: '2%',
};
const pieData1 = [
  {
    name: '芳华',
    percent: 0.4,
    a: '1',
  },
  {
    name: '妖猫传',
    percent: 0.2,
    a: '1',
  },
  {
    name: '机器之血',
    percent: 0.18,
    a: '1',
  },
  {
    name: '心理罪',
    percent: 0.15,
    a: '1',
  },
  {
    name: '寻梦环游记',
    percent: 0.05,
    a: '1',
  },
  {
    name: '其他',
    percent: 0.02,
    a: '1',
  },
];

const pieData2 = [
  {
    name: '其他消费',
    y: 6371664,
    const: 'const',
  },
  {
    name: '生活用品',
    y: 7216301,
    const: 'const',
  },
  {
    name: '通讯物流',
    y: 1500621,
    const: 'const',
  },
  {
    name: '交通出行',
    y: 586622,
    const: 'const',
  },
  {
    name: '饮食',
    y: 900000,
    const: 'const',
  },
];
/**
 * Author:liurui
 * date: 2020-7-7
 * 饼状图 实例
 */
export default class PiePage extends React.Component{




  render(){
    return (
      <ScrollView>
        <View>
          <View style={{height: 300}}>

            <ChartView
              data={pieData1}
              chartJS={this.renderPieChart1(pieMap1, pieData1)}
            />
          </View>
          <View style={{height: 300}}>
            <ChartView
              data={pieData2}
              chartJS={this.renderPieChart2(pieData2)}
            />
          </View>
        </View>
      </ScrollView>
    );
  }

  renderPieChart1(map, data) {
    const script = `
  (function(){
    // Step 1: 创建 Chart 对象
    const chart = new F2.Chart({
      id: 'chart',
      pixelRatio: window.devicePixelRatio // 指定分辨率
    });
    const map = ${JSON.stringify(map)};
    
    chart.source(${JSON.stringify(data)}, {
      percent: {
        formatter: function formatter(val) {
          return val * 100 + '%';
        }
      }
    });
    chart.legend({
      position: 'right',
      itemFormatter: function itemFormatter(val) {
        return val + '  ' + map[val];
      }
    });
    chart.tooltip(false);
    chart.coord('polar', {
      transposed: true,
      radius: 0.85
    });
    chart.axis(false);
    chart.interval()
      .position('a*percent')
      .color('name', [ '#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864', '#8543E0' ])
      .adjust('stack')
      .style({
        lineWidth: 1,
        stroke: '#fff',
        lineJoin: 'round',
        lineCap: 'round'
      })
      .animate({
        appear: {
          duration: 1200,
          easing: 'bounceOut'
        }
      });
    
    chart.render();
  })();
  `;
    return script;
  }

  renderPieChart2(data) {
    const script = `
  (function(){
    const chart = new F2.Chart({
      id: 'chart',
      pixelRatio: window.devicePixelRatio
    });
    chart.source(${JSON.stringify(data)});
      chart.coord('polar', {
        transposed: true,
        radius: 0.75
      });
      chart.legend(false);
      chart.axis(false);
      chart.tooltip(false)
      
      // 添加饼图文本
      chart.pieLabel({
        sidePadding: 40,
        label1: function label1(data, color) {
          return {
            text: data.name,
            fill: color
          };
        },
        label2: function label2(data) {
          return {
            text: '￥' + String(Math.floor(data.y * 100) / 100).replace(/\\B(?=(\\d{3})+(?!\\d))/g, ','),
            fill: '#808080',
            fontWeight: 'bold'
          };
        }
      });
      
      chart.interval()
        .position('const*y')
        .color('name', [ '#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864' ])
        .adjust('stack');
      chart.render();
  })();
  `;
    return script;
  }
}
