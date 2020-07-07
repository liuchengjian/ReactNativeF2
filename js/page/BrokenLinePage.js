import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import ChartView from '../chart/ChartView';

const brokenLineData1 = [
  {
    day: '周一',
    value: 300,
  },
  {
    day: '周二',
    value: 400,
  },
  {
    day: '周三',
    value: 350,
  },
  {
    day: '周四',
    value: 500,
  },
  {
    day: '周五',
    value: 490,
  },
  {
    day: '周六',
    value: 600,
  },
  {
    day: '周日',
    value: 900,
  },
];

const brokenLineData2 = [
  {
    date: '2017-06-05',
    value: 116,
  },
  {
    date: '2017-06-06',
    value: 129,
  },
  {
    date: '2017-06-07',
    value: 135,
  },
  {
    date: '2017-06-08',
    value: 86,
  },
  {
    date: '2017-06-09',
    value: 73,
  },
  {
    date: '2017-06-10',
    value: 85,
  },
  {
    date: '2017-06-11',
    value: 73,
  },
  {
    date: '2017-06-12',
    value: 68,
  },
  {
    date: '2017-06-13',
    value: 92,
  },
  {
    date: '2017-06-14',
    value: 130,
  },
  {
    date: '2017-06-15',
    value: 245,
  },
  {
    date: '2017-06-16',
    value: 139,
  },
  {
    date: '2017-06-17',
    value: 115,
  },
  {
    date: '2017-06-18',
    value: 111,
  },
  {
    date: '2017-06-19',
    value: 309,
  },
  {
    date: '2017-06-20',
    value: 206,
  },
  {
    date: '2017-06-21',
    value: 137,
  },
  {
    date: '2017-06-22',
    value: 128,
  },
  {
    date: '2017-06-23',
    value: 85,
  },
  {
    date: '2017-06-24',
    value: 94,
  },
  {
    date: '2017-06-25',
    value: 71,
  },
  {
    date: '2017-06-26',
    value: 106,
  },
  {
    date: '2017-06-27',
    value: 84,
  },
  {
    date: '2017-06-28',
    value: 93,
  },
  {
    date: '2017-06-29',
    value: 85,
  },
  {
    date: '2017-06-30',
    value: 73,
  },
  {
    date: '2017-07-01',
    value: 83,
  },
  {
    date: '2017-07-02',
    value: 125,
  },
  {
    date: '2017-07-03',
    value: 107,
  },
  {
    date: '2017-07-04',
    value: 82,
  },
  {
    date: '2017-07-05',
    value: 44,
  },
  {
    date: '2017-07-06',
    value: 72,
  },
  {
    date: '2017-07-07',
    value: 106,
  },
  {
    date: '2017-07-08',
    value: 107,
  },
  {
    date: '2017-07-09',
    value: 66,
  },
  {
    date: '2017-07-10',
    value: 91,
  },
  {
    date: '2017-07-11',
    value: 92,
  },
  {
    date: '2017-07-12',
    value: 113,
  },
  {
    date: '2017-07-13',
    value: 107,
  },
  {
    date: '2017-07-14',
    value: 131,
  },
  {
    date: '2017-07-15',
    value: 111,
  },
  {
    date: '2017-07-16',
    value: 64,
  },
  {
    date: '2017-07-17',
    value: 69,
  },
  {
    date: '2017-07-18',
    value: 88,
  },
  {
    date: '2017-07-19',
    value: 77,
  },
  {
    date: '2017-07-20',
    value: 83,
  },
  {
    date: '2017-07-21',
    value: 111,
  },
  {
    date: '2017-07-22',
    value: 57,
  },
  {
    date: '2017-07-23',
    value: 55,
  },
  {
    date: '2017-07-24',
    value: 60,
  },
];

const brokenLineData3 = [{
  time: '2016-08-08 00:00:00',
  value: 10,
  type: '预期收益率'
}, {
  time: '2016-08-08 00:10:00',
  value: 22,
  type: '预期收益率'
}, {
  time: '2016-08-08 00:30:00',
  value: 16,
  type: '预期收益率'
}, {
  time: '2016-08-09 00:35:00',
  value: 26,
  type: '预期收益率'
}, {
  time: '2016-08-09 01:00:00',
  value: 12,
  type: '预期收益率'
}, {
  time: '2016-08-09 01:20:00',
  value: 26,
  type: '预期收益率'
}, {
  time: '2016-08-10 01:40:00',
  value: 18,
  type: '预期收益率'
}, {
  time: '2016-08-10 02:00:00',
  value: 26,
  type: '预期收益率'
}, {
  time: '2016-08-10 02:20:00',
  value: 12,
  type: '预期收益率'
}, {
  time: '2016-08-08 00:00:00',
  value: 4,
  type: '实际收益率'
}, {
  time: '2016-08-08 00:10:00',
  value: 3,
  type: '实际收益率'
}, {
  time: '2016-08-08 00:30:00',
  value: 6,
  type: '实际收益率'
}, {
  time: '2016-08-09 00:35:00',
  value: -12,
  type: '实际收益率'
}, {
  time: '2016-08-09 01:00:00',
  value: 1,
  type: '实际收益率'
}, {
  time: '2016-08-09 01:20:00',
  value: 9,
  type: '实际收益率'
}, {
  time: '2016-08-10 01:40:00',
  value: 13,
  type: '实际收益率'
}, {
  time: '2016-08-10 02:00:00',
  value: -3,
  type: '实际收益率'
}, {
  time: '2016-08-10 02:20:00',
  value: 11,
  type: '实际收益率'
}];
const brokenLineData4=[{
  date: '2017-06-05',
  value: 11.6,
  tag: 0
}, {
  date: '2017-06-06',
  value: 12.9,
  tag: 0
}, {
  date: '2017-06-07',
  value: 13.5,
  tag: 0
}, {
  date: '2017-06-08',
  value: 8.6,
  tag: 2
}, {
  date: '2017-06-09',
  value: 7.3,
  tag: 2
}, {
  date: '2017-06-10',
  value: 8.5,
  tag: 0
}, {
  date: '2017-06-11',
  value: 7.3,
  tag: 0
}, {
  date: '2017-06-12',
  value: 6.8,
  tag: 0
}, {
  date: '2017-06-13',
  value: 9.2,
  tag: 0
}, {
  date: '2017-06-14',
  value: 13.0,
  tag: 1
}, {
  date: '2017-06-15',
  value: 24.5,
  tag: 0
}, {
  date: '2017-06-16',
  value: 13,
  tag: 0
}, {
  date: '2017-06-17',
  value: 11.5,
  tag: 1
}, {
  date: '2017-06-18',
  value: 11.1,
  tag: 0
}, {
  date: '2017-06-19',
  value: 30.9,
  tag: 0
}, {
  date: '2017-06-20',
  value: 20.6,
  tag: 1
}, {
  date: '2017-06-21',
  value: 13.7,
  tag: 1
}, {
  date: '2017-06-22',
  value: 12.8,
  tag: 1
}, {
  date: '2017-06-23',
  value: 8.5,
  tag: 0
}, {
  date: '2017-06-24',
  value: 9.4,
  tag: 1
}, {
  date: '2017-06-25',
  value: 7.1,
  tag: 0
}, {
  date: '2017-06-26',
  value: 10.6,
  tag: 0
}, {
  date: '2017-06-27',
  value: 8.4,
  tag: 0
}, {
  date: '2017-06-28',
  value: 9.3,
  tag: 0
}, {
  date: '2017-06-29',
  value: 8.5,
  tag: 0
}, {
  date: '2017-06-30',
  value: 7.3,
  tag: 0
}];

/**
 * Author:liurui
 * date: 2020-7-7
 * 折线 实例
 */
export default class BrokenLinePage extends React.Component {

  render() {
    return (
      <ScrollView>
        <View style={{}}>
          {/*<View style={{height: 300}}>*/}
          {/*  <ChartView*/}
          {/*    data={brokenLineData1}*/}
          {/*    chartJS={this.renderBrokenLineChart1(brokenLineData1)}*/}
          {/*  />*/}
          {/*</View>*/}
          {/*<View style={{height: 300}}>*/}
          {/*  <ChartView*/}
          {/*    data={brokenLineData2}*/}
          {/*    chartJS={this.renderBrokenLineChart2(brokenLineData2)}*/}
          {/*  />*/}
          {/*</View>*/}
          {/*<Text>{'彩票'}</Text>*/}
          {/*<View style={{height: 300}}>*/}
          {/*  <ChartView*/}
          {/*    data={brokenLineData3}*/}
          {/*    chartJS={this.renderBrokenLineChart3(brokenLineData3)}*/}
          {/*  />*/}
          {/*</View>*/}

          <View style={{height: 300}}>
            <ChartView
              data={brokenLineData4}
              chartJS={this.renderBrokenLineChart4(brokenLineData4)}
            />
          </View>
        </View>
      </ScrollView>
    );
  }

  renderBrokenLineChart1(data) {
    const script = `
  (function(){
    // Step 1: 创建 Chart 对象
    const chart = new F2.Chart({
      id: 'chart',
      pixelRatio: window.devicePixelRatio // 指定分辨率
    });
    
    chart.source(${JSON.stringify(data)}, {
      value: {
        tickCount: 5,
        min: 0
      },
      day: {
        range: [ 0, 1 ]
      }
    });
    chart.tooltip({
      showCrosshairs: true,
      showItemMarker: false,
      onShow: function onShow(ev) {
        const items = ev.items;
        items[0].name = null;
        items[0].value = '收入：' + items[0].value;
      }
    });
    chart.axis('day', {
      label: function label(text, index, total) {
        const textCfg = {};
        if (index === 0) {
          textCfg.textAlign = 'left';
        } else if (index === total - 1) {
          textCfg.textAlign = 'right';
        }
        return textCfg;
      }
    });
    chart.line().position('day*value');
    chart.point().position('day*value').style({
      stroke: '#fff',
      lineWidth: 1
    });
    chart.render();
  })();
  `;
    return script;
  }

  renderBrokenLineChart2(data) {
    const script = `
  (function(){
    const chart = new F2.Chart({
      id: 'chart',
      pixelRatio: window.devicePixelRatio
    });
    
    chart.source(${JSON.stringify(data)}, {
      value: {
        tickCount: 5,
        min: 0
      },
      date: {
        type: 'timeCat',
        range: [ 0, 1 ],
        tickCount: 3
      }
    });
    chart.tooltip({
      custom: true,
      showXTip: true,
      showYTip: true,
      snap: true,
      crosshairsType: 'xy',
      crosshairsStyle: {
        lineDash: [ 2 ]
      }
    });
    chart.axis('date', {
      label: function label(text, index, total) {
        const textCfg = {};
        if (index === 0) {
          textCfg.textAlign = 'left';
        } else if (index === total - 1) {
          textCfg.textAlign = 'right';
        }
        return textCfg;
      }
    });
    chart.line().position('date*value');
    chart.render();
  })();
  `;
    return script;
  }


  renderBrokenLineChart3(data) {
    const script = `
  (function(){
       const chart = new F2.Chart({
          id: 'chart',
          pixelRatio: window.devicePixelRatio
       });
        chart.source(${JSON.stringify(data)}, {
          time: {
            type: 'timeCat',
            tickCount: 3,
            mask: 'hh:mm',
            range: [ 0, 1 ]
          },
          value: {
            tickCount: 3,
            formatter: function formatter(ivalue) {
              return ivalue + '%';
            }
          }
        });
        chart.axis('time', {
          line: null,
          label: function label(text, index, total) {
            const textCfg = {};
            if (index === 0) {
              textCfg.textAlign = 'left';
            } else if (index === total - 1) {
              textCfg.textAlign = 'right';
            }
            return textCfg;
          }
        });
        chart.axis('tem', {
          grid: function grid(text) {
            if (text === '0%') {
              return {
                lineDash: null,
                lineWidth: 1
              };
            }
          }
        });
        chart.legend({
          position: 'bottom',
          offsetY: -5
        });
        chart.line()
          .position('time*value')
          .color('type')
          .shape('type', function(type) {
            if (type === '预期收益率') {
              return 'line';
            }
            if (type === '实际收益率') {
              return 'dash';
            }
          });
        chart.render();
  })();
  `;
    return script;
  }

  renderBrokenLineChart4(data) {
    const script = `
  (function(){
       const chart = new F2.Chart({
          id: 'chart',
          pixelRatio: window.devicePixelRatio,
          padding: [ 45, 'auto', 'auto' ]
        });
        
        chart.source(${JSON.stringify(data)}, {
          value: {
            tickCount: 5,
            min: 0,
            formatter: function formatter(val) {
              return val.toFixed(2) + '%';
            }
          },
          date: {
            type: 'timeCat',
            range: [ 0, 1 ],
            tickCount: 3
          }
        });
        
        chart.axis('date', {
          label: function label(text, index, total) {
            const textCfg = {};
            if (index === 0) {
              textCfg.textAlign = 'left';
            } else if (index === total - 1) {
              textCfg.textAlign = 'right';
            }
            return textCfg;
          }
        });
        chart.axis('value', {
          label: function label(text, index, total) {
            const textCfg = {};
            if (index === 0) {
              textCfg.textBaseline = 'bottom';
            } else if (index === total - 1) {
              textCfg.textBaseline = 'top';
            }
            return textCfg;
          }
        });
        chart.legend({
          custom: true,
          itemWidth: null,
          items: [{
            name: '买入点',
            marker: 'circle',
            fill: '#F35833'
          }, {
            name: '卖出点',
            marker: 'circle',
            fill: '#518DFE'
          }]
        });
        chart.guide().html({
          position: [ 'min', 'max' ],
          html: '${<div id="tooltipWrapper" style="height: 30px;background-color:#E9F1FF;line-height: 30px;">
      <div id="tooltipName" style="float:left;font-size:12px;color:#2E2E2E;"></div>
      <div id="tooltipValue" style="float:right;font-size:12px;color:#2E2E2E;"></div>
    </div>}',
          offsetY: -22.5
        });
        chart.tooltip({
          showCrosshairs: true,
          custom: true, // 自定义 tooltip 内容框
          onChange: function onChange(obj) {
            const items = obj.items;
            const originData = items[0].origin;
            const date = originData.date;
            const value = originData.value;
            const tag = originData.tag;
        
            $('#tooltipWrapper').width($('#container').width());
            $('#tooltipWrapper').css('left', 0);
            $('#tooltipName').css('margin-left', 15);
            $('#tooltipValue').css('margin-right', 15);
        
            
            const color = value >= 0 ? '#FA541C' : '#1CAA3D';
        
            $('#tooltipValue').html('涨幅：');
            $('#tooltipWrapper').show();
          },
          onHide: function onHide() {
            $('#tooltipWrapper').hide();
          }
        });
        chart.line().position('date*value').color('#518DFE');
        chart.point()
          .position('date*value')
          .size('tag', function(val) {
            return val ? 3 : 0;
          })
          .style('tag', {
            fill: function fill(val) {
              if (val === 2) {
                return '#518DFE';
              } else if (val === 1) {
                return '#F35833';
              }
            },
            stroke: '#fff',
            lineWidth: 1
          });
        chart.render();
  })();
  `;
    return script;
  }
}
