# react-dates-presets

Preset picker based on `react-dates` - allows you to define preset ranges like `today`, `last week`, etc.

![demo gif](http://streamfoundations.github.io/react-dates-presets/demo/demo.gif)

## Demo & Examples

Live demo: [streamfoundations.github.io/react-dates-presets/demo](http://streamfoundations.github.io/react-dates-presets/demo/)

## Usage

```javascript
render() {
  const ranges = [
    { id: 'today', range: { startDate: moment(), endDate: moment() }, label: 'Today' },
    { id: '7_days', range: { startDate: moment().subtract(7, 'days'), endDate: moment() }, label: 'Last 7 days' },
    { id: '1_month', range: { startDate: moment().subtract(1, 'month'), endDate: moment() }, label: 'Last month' },
    { id: '2_months', range: { startDate: moment().subtract(2, 'months'), endDate: moment() }, label: 'Last 2 months' },
  ];

  return (
    <DatePresetPicker
      value={this.props.value}
      onChange={this.onChange}
      ranges={ranges}
      isOutsideRange={(date) => false /* allow future & past dates */}
    />
  );
}
```

You can also check out working code in [/demo/App.jsx](https://github.com/streamfoundations/react-dates-presets/blob/master/demo/App.jsx).
