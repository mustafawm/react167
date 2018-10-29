import React from 'react';
import StopWatch from './StopWatch';
import StopWatchReducer from './StopWatchReducer';
import StopWatchReducer2 from './StopWatchReducer2';
import StopWatchReducerHook from './StopWatchReducerHook';

function StopWatches() {
  return (
    <React.Fragment>
      <StopWatch />
      <hr />
      <StopWatchReducer />
      <hr />
      <StopWatchReducer2 />
      <hr />
      <StopWatchReducerHook />
      <hr />
    </React.Fragment>
  );
}

export default StopWatches;
