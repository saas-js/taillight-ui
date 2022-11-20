import * as React from 'react'
import * as pressable from '@zag-js/pressable'
import { useMachine, normalizeProps } from '@zag-js/react'

import { button, ButtonStyleProps } from '@pulse-ui/core'

export interface ButtonProps
  extends ButtonStyleProps,
    Omit<pressable.Context, 'id'> {
  id?: string
  children?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, id, onPress, onLongPress } = props

  const [state, send] = useMachine(
    pressable.machine({
      id: id || React.useId(),
      onPress,
      onLongPress,
    })
  )

  const api = pressable.connect(state, send, normalizeProps)

  return (
    <button {...api.pressableProps} className={button(props)}>
      {children}
    </button>
  )
}
