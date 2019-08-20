import * as React from 'react';

type useCooldownType = (
  cooldownTime: number
) => [boolean, React.Dispatch<React.SetStateAction<boolean>>];

export const useCooldown: useCooldownType = (cooldownTime: number = 500) => {
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
