import React from 'react';
import {render, fireEvent} from 'react-testing-library';
import Counter from '../components/CountBtn';

afterEach(() => {
  window.localStorage.removeItem('count');
});

test('reads/updates/increments counter/localStorage ', () => {
  window.localStorage.setItem('count', 3);
  const {getByTestId, rerender} = render(<Counter />);
  const button = getByTestId('counter-btn');

  expect(button.textContent).toBe('3 clicks');
  fireEvent.click(button);
  expect(button.textContent).toBe('4 clicks');
  rerender(<Counter />); // wait for localstorage to be updated
  expect(window.localStorage.getItem('count')).toBe('4');
});
