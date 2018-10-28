import React, {useReducer, useRef, useEffect} from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'LAPSE':
      return {
        ...state,
        lapse: action.payload,
      };
    case 'TOGGLE_RUNNING':
      return {
        ...state,
        isRunning: !state.isRunning,
      };
    case 'CLEAR':
      return {
        ...state,
        lapse: 0,
        isRunning: 0,
      };
    default:
      return state;
  }
}

const StopWatch = () => {
  const [state, dispatch] = useReducer(reducer, {isRunning: false, lapse: 0});
  const intervalRef = useRef(null);
  const dispatcher = (type, payload) => dispatch({type, payload});

  useEffect(() => clearInterval(intervalRef.current), []);

  function handleRunClick() {
    if (state.isRunning) {
      clearInterval(intervalRef.current);
    } else {
      const startTime = Date.now() - state.lapse;
      intervalRef.current = setInterval(() => {
        dispatcher('LAPSE', Date.now() - startTime);
      }, 0);
    }

    dispatcher('TOGGLE_RUNNING');
  }

  function handleClearClick() {
    clearInterval(intervalRef.current);
    dispatcher('CLEAR');
  }

  return (
    <div style={{textAlign: 'center'}}>
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
