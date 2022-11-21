import type { Meta, StoryFn } from '@storybook/html'
import type { ComponentProps } from 'solid-js'

import { Button } from '../src/button'

export default {
  title: 'Solid/Button',
} as Meta<ComponentProps<typeof Button>>

export const Primary = () => {
  return <Button>Button</Button>
}
