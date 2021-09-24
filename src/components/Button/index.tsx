import { ButtonHTMLAttributes, FC, useState } from 'react'
import { Loader } from 'react-feather'

import { ButtonContainer, ButtonText } from '@styles/components/button'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary'
  click: () => void
}

export const Button: FC<ButtonProps> = ({ children, click, ...rest }) => {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <ButtonContainer
      {...rest}
      onClick={() => {
        click
        setIsLoading(!isLoading)
      }}
      isLoading={isLoading}
    >
      <ButtonText isLoading={isLoading}>{children}</ButtonText>
    </ButtonContainer>
  )
}
