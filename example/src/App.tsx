import React, { useState } from 'react';
import { useCooldown } from 'use-cooldown';
import './App.css';

const App = () => {
  const [cooldownTime, setCooldownTime] = useState<number | undefined>(
    undefined
  );
  const [cooledDown, setCooledDown] = useCooldown(cooldownTime || 0);
  const startCooldown = () => setCooledDown(false);
  const changeCooldownTime = ({
    target: { value }
  }: React.ChangeEvent<HTMLInputElement>) =>
    setCooldownTime(parseInt(value, 10));
  return (
    <div className="container">
      <div className="actionContainer">
        <div className="text">{`Cooled Down: ${cooledDown}`}</div>
        <div className="text">
          <div className="text">
            Set the length of time to disable the button in milliseconds.
          </div>
          <input
            className="textInput"
            pattern="[0-9]*"
            inputMode="numeric"
            type="number"
            onChange={changeCooldownTime}
            value={cooldownTime || ''}
          />
        </div>
        <button disabled={!cooledDown} onClick={startCooldown}>
          Begin Cooldown
        </button>
      </div>
    </div>
  );
};

export default App;
