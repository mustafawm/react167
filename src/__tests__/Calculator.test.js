import React from 'react';
import {render} from 'react-testing-library';
import CalculatorDisplay from '../components/Calculator';

test('Calc display mounts', () => {
  const {container} = render(<CalculatorDisplay value="0" />);
  expect(container).toMatchSnapshot();
});
