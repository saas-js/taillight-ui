# Pulse

Polymorphic and TypeSafe Tailwind UI library

## Features

- Cross framework support
  - Plain JS/TS
  - React
  - Vue
  - Solid
  - Svelte
- Lightweight
- TypeSafe
- Themable
- Variants
- Accessible
- Component logic using state machines [Zag.js](https://zagjs.com/)

## Usage

### Plain JS/TS

```js
import { button } from '@pulse-ui/button'

const button = `<button class="${button({
  intent: 'primary',
})}">Click me</button>`
```

### React

```jsx
import { Button } from '@pulse-ui/react-button'

const button = <Button intent="primary">Click me</Button>
```

### Solid

```jsx
import { Button } from '@pulse-ui/solid-button'

const button = <Button intent="primary">Click me</Button>
```
