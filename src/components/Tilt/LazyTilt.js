import React, {useState, Suspense} from 'react';

const Tilt = React.lazy(() => import('./VnillaTilt'));

function useToggle(init = false) {
  const [on, setOn] = useState(init);
  const toggle = () => setOn(!on);

  return [on, toggle];
}

function CheckBox() {
  const [showTilt, toggleTilt] = useToggle();

  return (
    <div>
      <label htmlFor="tilt-checkbox">Show Tilt</label>
      <input type="checkbox" onChange={toggleTilt} />

      {showTilt ? (
        <Suspense fallback={<span>loading...</span>}>
          <Tilt />
        </Suspense>
      ) : null}
    </div>
  );
}

export default CheckBox;
