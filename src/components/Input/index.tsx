import { FC, InputHTMLAttributes } from 'react'

import {
  InputContainer,
  InputElement,
  Label,
  Span,
} from '@styles/components/input'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export const Input: FC<InputProps> = ({ name, placeholder, ...rest }) => {
  return (
    <InputContainer>
      <InputElement {...rest} id={name} />
      <Label htmlFor={name}>{placeholder}</Label>
      <Span />
    </InputContainer>
  )
}
