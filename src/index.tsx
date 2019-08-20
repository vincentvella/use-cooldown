import * as React from 'react';

export const useCooldown = (cooldownTime: number) => {
  const [cooledDown, setCooledDown] = React.useState<boolean>(true);
  React.useEffect(() => {
    let cooldownTimer: number;
    if (!cooledDown) {
      cooldownTimer = window.setTimeout(
        () => setCooledDown(true),
        cooldownTime
      );
    }
    return () => window.clearTimeout(cooldownTimer);
  }, [cooledDown]);
  return [cooledDown, setCooledDown];
};
