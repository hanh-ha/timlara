import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styles from './DatePresetPicker.css';

class RangeButton extends PureComponent {
  onClick = (e) => {
    e.preventDefault();
    const { clickFunction, range, params } = this.props;
    if (params) {
      return clickFunction(params);
    }
    clickFunction(range);
  };

  rangeActive = () => {
    const { range, activeRange } = this.props;
    return range && moment(activeRange.startDate).isSame(range.startDate, 'day') && moment(activeRange.endDate).isSame(range.endDate, 'day');
  };

  render() {
    const { children, clickFunction, range, params, activeRange, ...otherProps } = this.props;
    return (
      <button
        type="button"
        className={this.rangeActive() ? styles.activeRangeButton : styles.rangeButton}
        onClick={this.onClick}
        {...otherProps}
      >
        {children}
      </button>
    );
  }
}

RangeButton.propTypes = {
  children: PropTypes.node.isRequired,
  kind: PropTypes.string,
  range: PropTypes.object,
  activeRange: PropTypes.object,
  params: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  clickFunction: PropTypes.func.isRequired,
};

RangeButton.defaultProps = {
  kind: '',
  range: undefined,
  activeRange: {},
  params: undefined,
};

export default RangeButton;
