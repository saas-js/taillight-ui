import { cva, VariantProps } from 'class-variance-authority'

export type ButtonStyleProps = VariantProps<typeof button>

export const button = cva(
  ['inline-flex', 'items-center', 'font-medium', 'border'],
  {
    variants: {
      intent: {
        primary: [
          'bg-purple-500',
          'text-white',
          'border-purple-500',
          'hover:bg-purple-600',
        ],
        secondary: [
          'bg-white',
          'text-gray-800',
          'border-gray-200',
          'hover:bg-gray-100',
          'hover:border-gray-300',
        ],
        tertiary: ['bg-gray-200', 'border-gray-200', 'hover:border-gray-300'],
      },
      size: {
        xs: ['text-xs', 'h-5', 'px-2'],
        sm: ['text-sm', 'h-6', 'px-2'],
        md: ['text-sm', 'h-7', 'px-4'],
      },
      rounded: {
        sm: ['rounded-sm'],
        md: ['rounded-md'],
        lg: ['rounded-lg'],
      },
    },
    defaultVariants: {
      intent: 'secondary',
      size: 'md',
      rounded: 'md',
    },
  }
)
