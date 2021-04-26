import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import _ from 'lodash';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';
import OutsideClickHandler from 'react-dates/lib/components/OutsideClickHandler';
import RangeButton from './RangeButton';
import styles from './DatePresetPicker.css';

class DatePresetPicker extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.object,
    ranges: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      range: PropTypes.object.isRequired,
      label: PropTypes.string.isRequired,
    })).isRequired,
    onChange: PropTypes.func,
    onClose: PropTypes.func,
    onFocus: PropTypes.func,
    customRangeLabel: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
  };

  static defaultProps = {
    className: undefined,
    value: undefined,
    onChange: undefined,
    onFocus: undefined,
    onClose: undefined,
    customRangeLabel: 'Custom range',
  };

  state = { value: { startDate: undefined, endDate: undefined }, focusedInput: false };

  componentWillMount() {
    if (this.props.value) {
      this.setState({ value: this.props.value });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value });
    }
  }

  onPickerClick = (e) => {
    e.preventDefault();
    this.focus();
  };

  onCalendarFocusChange = (focusedCalendar) => {
    if (this.state.pickerVisible) {
      const newFocus = { focusedCalendar, presetPickerActive: !focusedCalendar, pickerVisible: !!focusedCalendar };
      this.setState(newFocus);
    }
  };

  onPresetRangeSet = (values) => {
    this.setState({ value: values, pickerVisible: false, presetPickerActive: false });
    if (this.props.onClose) {
      this.props.onClose();
    }
    this.props.onChange(values);
  };

  onChange = (values) => {
    const newValues = { ...this.state.value, ..._.pickBy(values, _.identity) };
    this.setState({ value: newValues });
    this.props.onChange(newValues);
  };

  onOutsideClick = () => {
    if (this.state.presetPickerActive) {
      this.setState({ pickerVisible: false, presetPickerActive: false });
    }
  };

  focus = () => {
    if (this.props.onFocus) {
      this.props.onFocus();
    }
    if (!this.state.pickerVisible) {
      this.setState({ pickerVisible: true, presetPickerActive: true });
    }
  };

  rangeId = (range) => range.id || range.label.toLowerCase().replace(' ', '_');

  value = () => this.state.value;

  render() {
    const { value, onChange, onFocus, ranges, className, customRangeLabel, ...props } = this.props;
    const stateValue = this.state.value;

    return (
      <div className={styles.wrapper}>
        <div id="pickerWrapper" onClick={this.onPickerClick} className={classnames(styles.pickerWrapper, className)}>
          <DateRangePicker
            {...props}
            startDate={moment(stateValue.startDate)}
            endDate={moment(stateValue.endDate)}
            onDatesChange={this.onChange}
            focusedInput={this.state.focusedCalendar}
            onFocusChange={this.onCalendarFocusChange}
            initialVisibleMonth={() => moment(stateValue.startDate)}
          />
        </div>
        {
          this.state.pickerVisible && this.state.presetPickerActive &&
            <OutsideClickHandler onOutsideClick={this.onOutsideClick}>
              <div className="DateRangePicker__picker DateRangePicker__picker--horizontal DateRangePicker--with-caret">
                <div className="DayPicker DayPicker--horizontal">
                  <div className={styles.rangePickerIn}>
                    {ranges.map((range) =>
                      <RangeButton key={this.rangeId(range)} id={this.rangeId(range)} activeRange={stateValue} range={range.range} clickFunction={this.onPresetRangeSet}>{range.label}</RangeButton>
                    )}
                    <RangeButton id="custom_range" params="startDate" clickFunction={this.onCalendarFocusChange}>{customRangeLabel}</RangeButton>
                  </div>
                </div>
              </div>
            </OutsideClickHandler>
        }
      </div>
    );
  }
}

export default DatePresetPicker;
