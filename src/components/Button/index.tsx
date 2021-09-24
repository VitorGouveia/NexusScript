import { ButtonHTMLAttributes, FC } from 'react'

import { ButtonContainer } from '@styles/components/button'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary'
}

export const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  return <ButtonContainer {...rest}>{children}</ButtonContainer>
}
