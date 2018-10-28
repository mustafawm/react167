import React, {useState} from 'react';
/**
 * calling setFirstname or setLastname will re-render <Form />
 * React, by default, re-renders function components upon any change
 * enter React.memo
 */

const Upper = React.memo(props => {
  const [count, setCount] = useState(0);
  console.log(`rerendering ${props.children}`);

  return (
    <div>
      Uppercase version: `$
      {props.children.toUpperCase()} `
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
});

function Form() {
  const [first, setFirstname] = useState('');
  const [last, setLastname] = useState('');

  return (
    <div>
      <label htmlFor="first-name">
        First Name
        <input id="first-name" onChange={e => setFirstname(e.target.value)} />
      </label>
      <Upper>{first}</Upper>
      <hr />
      <label htmlFor="last-name">Last Name</label>
      <input id="last-name" onChange={e => setLastname(e.target.value)} />
      <Upper>{last}</Upper>
    </div>
  );
}

export default Form;
