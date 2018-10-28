import React, {useReducer, useRef, useEffect} from 'react';

function reducer(currentState, newState) {
  return {...currentState, ...newState};
}

const StopWatch = () => {
  const [state, setState] = useReducer(reducer, {isRunning: false, lapse: 0});
  const intervalRef = useRef(null);

  useEffect(() => clearInterval(intervalRef.current), []);

  function handleRunClick() {
    if (state.isRunning) {
      clearInterval(intervalRef.current);
    } else {
      const startTime = Date.now() - state.lapse;
      intervalRef.current = setInterval(() => {
        setState({lapse: Date.now() - startTime});
      }, 0);
    }

    setState({isRunning: !state.isRunning});
  }

  function handleClearClick() {
    clearInterval(intervalRef.current);
    setState({lapse: 0, isRunning: false});
  }

  return (
    <div style={{textAlign: 'center'}}>
      <p>Simple reducer</p>
      <span
        style={{
          fontSize: '3em',
          display: 'block',
        }}
      >
        {state.lapse} ms
      </span>
      <button onClick={handleRunClick}>
        {state.isRunning ? 'Stop' : 'Start'}
      </button>
      <button onClick={handleClearClick}>Clear</button>
    </div>
  );
};

export default StopWatch;
