import React from 'react';
import styles from './styles.module.css';
import AutoScalingText from './AutoScalingText';
import {getFormattedValue} from './utils';

function CalculatorDisplay(props) {
  const {value, ...restProps} = props;
  const formattedValue = getFormattedValue(value, navigator.language);

  return (
    <div {...restProps} className={styles.calculatorDisplay}>
      <AutoScalingText>{formattedValue}</AutoScalingText>
    </div>
  );
}

export default CalculatorDisplay;
