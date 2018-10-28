import React from 'react';
import ReactDOM from 'react-dom';
import StopWatch from './StopWatch';
import CounterButton from './CounterButton';

function App() {
  return (
    <React.Fragment>
      <CounterButton />
      <hr />
      <StopWatch />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('⚛️'));

module.hot.accept();
