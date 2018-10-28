import React, {useState, useEffect} from 'react';

export default function CounterButton() {
  const [count, setCount] = useState(
    () => Number(window.localStorage.getItem('count')) || 0,
  );

  useEffect(
    () => {
      window.localStorage.setItem('count', count);
    },
    [count],
  );

  return <button onClick={() => setCount(count + 1)}>{count} clicks</button>;
}
