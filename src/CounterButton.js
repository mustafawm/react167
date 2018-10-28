import React, {useState} from 'react';

export default function CounterButton() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>{count} clicks</button>;
}
