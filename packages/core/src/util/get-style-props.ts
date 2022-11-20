import { VariantProps } from 'class-variance-authority'
import { pick } from './pick'

const styleProps = ['intent', 'rounded', 'size']

export interface StyleProps {
  intent?: string
  rounded?: string
  size?: string
}

export const getStyleProps = <TProps extends StyleProps>(props: TProps) => {
  return pick<any, any>(props, styleProps)
}
