import React, {PureComponent, createRef} from 'react';
import {StyleSheet, Platform} from 'react-native';
import {WebView as RNWebView} from 'react-native-webview';

const source = Platform.select({
  ios: require('./f2Chart.html'),
  android: {uri: 'file:///android_asset/f2Chart.html'},
});

/**
 * 自定义基础F2 Chart页面，主要封装WebView去承载F2图形
 */
export default class ChartView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      // chartJS: this.props.chartJS,
    };
    this.chart = createRef();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const {data, chartJS} = nextProps;
    // 当传入的data发生变化的时候，更新state
    alert(chartJS)
    if (data !== prevState.data) {
      return {data}; //chartJS
    }
    // 否则，对于state不进行任何操作
    return null;
  }

  componentDidMount(): void {
  }

  componentDidUpdate(): void {
    if (this.chart.current != null) {
      //state变化时，重新加载浏览器
      this.reload();
      this.chart.current.injectJavaScript(this.props.chartJS);
    }
  }

  render() {
    return (
      <RNWebView
        scrollEnabled={false}
        javaScriptEnabled={true}
        ref={this.chart}
        startInLoadingState={true}
        style={styles.webViewStyle}
        injectedJavaScript={this.props.chartJS}
        source={source}
        onLoadEnd={this.onLoadEnd}
        originWhitelist={['*']}
        onMessage={this.onMessage}
      />
    );
  }

  onMessage = (event) => {
    const {
      nativeEvent: {data},
    } = event;
    const {onChange} = this.props;
    const tooltip = JSON.parse(data);
    onChange(tooltip);
  };

  reload = () => {
    this.chart.current.reload();
  };

  onLoadEnd = () => {
    setTimeout(() => {
      this.chart.current.injectJavaScript(this.props.chartJS);
    }, 10);
  };
}

const styles = StyleSheet.create({
  webViewStyle: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});
