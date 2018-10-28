import React, {useState, useRef, useEffect} from 'react';

export default () => {
  const [lapse, setLapse] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => clearInterval(intervalRef.current), []);

  function handleRunClick() {
    if (isRunning) {
      clearInterval(intervalRef.current);
    } else {
      const startTime = Date.now() - lapse;
      intervalRef.current = setInterval(() => {
        setLapse(Date.now() - startTime);
      }, 0);
    }

    setIsRunning(!isRunning);
  }

  function handleClearClick() {
    clearInterval(intervalRef.current);
    setLapse(0);
    setIsRunning(false);
  }

  return (
    <div style={{textAlign: 'center'}}>
      <span
        style={{
          fontSize: '3em',
          display: 'block',
        }}
      >
        {lapse} ms
      </span>
      <button onClick={handleRunClick}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={handleClearClick}>Clear</button>
    </div>
  );
};
