import * as pressable from '@zag-js/pressable'
import { normalizeProps, useMachine } from '@zag-js/solid'
import { createMemo, createUniqueId, Component, JSX } from 'solid-js'

import { button as buttonStyles, ButtonStyleProps } from '@pulse-ui/button'

export interface ButtonProps
  extends ButtonStyleProps,
    Omit<pressable.Context, 'id'> {
  id?: string
  children?: JSX.Element
}

export const Button: Component<ButtonProps> = (props) => {
  const { children, id, onPress, onLongPress } = props

  const [state, send] = useMachine(
    pressable.machine({
      id: id || createUniqueId(),
      onPress,
      onLongPress,
    })
  )

  const api = createMemo(() => pressable.connect(state, send, normalizeProps))

  return (
    <button {...api().pressableProps} class={buttonStyles(props)}>
      {children}
    </button>
  )
}
