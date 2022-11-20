import { Meta, StoryFn } from '@storybook/html'

import { button } from './button'

export default {
  title: 'Core/Button',
} as Meta

export const Default: StoryFn = (): HTMLButtonElement => {
  const btn = document.createElement('button')
  btn.innerText = 'Button'

  btn.className = button()

  return btn
}

export const Primary: StoryFn = (): HTMLButtonElement => {
  const btn = document.createElement('button')
  btn.innerText = 'Button'

  btn.className = button({ intent: 'primary' })

  return btn
}

export const Secondary: StoryFn = (): HTMLButtonElement => {
  const btn = document.createElement('button')
  btn.innerText = 'Button'

  btn.className = button({ intent: 'secondary' })

  return btn
}

export const Tertiary: StoryFn = (): HTMLButtonElement => {
  const btn = document.createElement('button')
  btn.innerText = 'Button'

  btn.className = button({ intent: 'tertiary' })

  return btn
}
