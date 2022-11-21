import * as React from 'react'
import { Meta, StoryFn } from '@storybook/react'

import { Button } from '../src/button'

export default {
  title: 'React/Button',
} as Meta

export const Primary: StoryFn = () => {
  return <Button>Button</Button>
}
