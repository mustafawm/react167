import React from 'react';
import {callme} from 'shared/helpers';
import LazyTilt from './LazyTilt';
import VnillaTilt from './VnillaTilt';

function Tilts() {
  callme();
  return (
    <React.Fragment>
      <VnillaTilt />
      <hr />
      <LazyTilt />
      <hr />
    </React.Fragment>
  );
}

export default Tilts;
