import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/CountBtn';
import StopWatches from './components/StopWatch';
import SimpleForm from './components/SimpleForm';
import Tilt from './components/Tilt';

function App() {
  return (
    <React.Fragment>
      Calculator
      <Counter />
      <StopWatches />
      <Tilt />
      <SimpleForm />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('⚛️'));

if (module.hot) {
  module.hot.accept();
}
