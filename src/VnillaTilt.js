import React, {useEffect, useRef} from 'react';
import VanillaTilt from 'vanilla-tilt';
import './VanillaTilt.css';

const Tilt = props => {
  const tiltRef = useRef();

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    });

    return () => tiltRef.current.vanillaTilt.destroy();
  }, []);

  return (
    <div ref={tiltRef} className="tilt-root">
      <div className="tilt-child">{props.children}</div>
    </div>
  );
};

const WrappedTilt = () => (
  <div className="totally-centered">
    <Tilt>
      <div className="totally-centered">JUST THE TILT</div>
    </Tilt>
  </div>
);

export default WrappedTilt;
