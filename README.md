# use-cooldown

> A React hook implementation for client-side rate limiting.

[![NPM](https://img.shields.io/npm/v/use-cooldown.svg)](https://www.npmjs.com/package/use-cooldown) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-cooldown
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from 'use-cooldown'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [vincentvella](https://github.com/vincentvella)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
