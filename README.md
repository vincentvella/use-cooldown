# use-cooldown

> A React hook implementation for client-side rate limiting.

[![NPM](https://img.shields.io/npm/v/use-cooldown.svg)](https://www.npmjs.com/package/use-cooldown) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Build Status](https://travis-ci.org/vincentvella/use-cooldown.svg?branch=master)](https://travis-ci.org/vincentvella/use-cooldown)

## Install

```bash
npm install --save use-cooldown
```

## Usage

```tsx
import * as React from 'react';
import { useCooldown } from 'use-cooldown';

const Example = () => {
  const [cooledDown, setCooledDown] = useCooldown(1000); // pass in length of cooldown in ms
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
```

## License

MIT © [vincentvella](https://github.com/vincentvella)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
