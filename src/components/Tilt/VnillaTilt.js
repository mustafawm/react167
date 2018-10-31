/* eslint react/prop-types:0 */
import React, {useEffect, useRef} from 'react';
import VanillaTilt from 'vanilla-tilt';
import styles from './VanillaTilt.module.css';

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
    <div ref={tiltRef} className={styles.tiltRoot}>
      <div className={styles.tiltChild}>{props.children}</div>
    </div>
  );
};

const WrappedTilt = () => (
  <div className={styles.totallyCentered}>
    <Tilt>
      <div className={styles.totallyCentered}>JUST THE TILT</div>
    </Tilt>
  </div>
);

export default WrappedTilt;
