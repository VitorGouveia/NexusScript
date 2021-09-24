import { ButtonHTMLAttributes, FC, useState } from 'react'
import { Loader } from 'react-feather'

import { ButtonContainer, ButtonText } from '@styles/components/button'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'tertiary'
  isLoading?: boolean
  icon?: boolean
}

export const Button: FC<ButtonProps> = ({
  children,
  isLoading = false,
  icon = false,
  ...rest
}) => {
  return (
    <ButtonContainer {...rest} isLoading={isLoading || false}>
      <ButtonText icon={icon} isLoading={isLoading || false}>
        {children}
      </ButtonText>
    </ButtonContainer>
  )
}
