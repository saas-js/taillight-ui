# Taillight UI

A modern, type-safe and cross framework UI library

## Features

- Cross framework support
  - Plain JS/TS
  - React
  - Vue
  - Solid
- Zero-runtime CSS engine (PandaCSS, supports RSC)
- Lightweight
- TypeSafe
- Themable
- Variants
- Accessible

## Usage

### Plain JS/TS

```js
import { button } from 'taillight'

const button = `<button class="${button({
  variant: 'primary',
})}">Click me</button>`
```

### React

```jsx
import { Button } from '@taillight-ui/react'

const button = <Button variant="primary">Click me</Button>
```

### Solid

```jsx
import { Button } from '@taillight-ui/solid'

const button = <Button variant="primary">Click me</Button>
```
