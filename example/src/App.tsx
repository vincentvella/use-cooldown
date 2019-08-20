import React from 'react';
import { useCooldown } from 'use-cooldown';

const App = () => {
  const [cooledDown, setCooledDown] = useCooldown(1000);
  const startCooldown = () => setCooledDown(false);
  return (
    <div>
      <div>{`${cooledDown}`}</div>
      <button disabled={!cooledDown} onClick={startCooldown}>
        Begin Cooldown
      </button>
    </div>
  );
};

export default App;
