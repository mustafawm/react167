import React, {useReducer, useRef, useEffect} from 'react';

function reducer(currentState, newState) {
  return {...currentState, ...newState};
}

// custom hook
function useStopWatch() {
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

  return {
    handleClearClick,
    handleRunClick,
    ...state,
  };
}

const StopWatchHook = () => {
  const swOne = useStopWatch();
  const swTwo = useStopWatch();

  return (
    <React.Fragment>
      <p style={{textAlign: 'center'}}>Custom hook</p>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <span>
          <span
            style={{
              fontSize: '3em',
              display: 'block',
            }}
          >
            {swOne.lapse} ms
          </span>
          <button onClick={swOne.handleRunClick}>
            {swOne.isRunning ? 'Stop' : 'Start'}
          </button>
          <button onClick={swOne.handleClearClick}>Clear</button>
        </span>

        <strong>
          Lapse difference:
          {swOne.lapse - swTwo.lapse}
        </strong>

        <span>
          <span
            style={{
              fontSize: '3em',
              display: 'block',
            }}
          >
            {swTwo.lapse} ms
          </span>
          <button onClick={swTwo.handleRunClick}>
            {swTwo.isRunning ? 'Stop' : 'Start'}
          </button>
          <button onClick={swTwo.handleClearClick}>Clear</button>
        </span>
      </div>
    </React.Fragment>
  );
};

export default StopWatchHook;
