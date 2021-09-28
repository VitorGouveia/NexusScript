import { FC, InputHTMLAttributes, useState } from 'react'
import PhoneInput from 'react-phone-input-2'

import {
  InputContainer,
  InputElement,
  Label,
  Span,
} from '@styles/components/input'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  noLabel?: boolean
}

export const Input: FC<InputProps> = ({
  name,
  placeholder,
  noLabel,
  ...rest
}) => {
  return (
    <InputContainer>
      {noLabel ? (
        <>
          <InputElement maxLength={6} short={noLabel} {...rest} id={name} />
          <Span short={noLabel} />
        </>
      ) : (
        <>
          <InputElement {...rest} id={name} />
          <Label htmlFor={name}>{placeholder}</Label>
          <Span />
        </>
      )}
    </InputContainer>
  )
}

export const Datalist: FC<InputProps> = ({
  name,
  placeholder,
  noLabel,
  children,
  ...rest
}) => {
  return (
    <InputContainer>
      {noLabel ? (
        <>
          <InputElement
            list={name}
            maxLength={6}
            short={noLabel}
            {...rest}
            id={name}
          />
          <datalist id={name}>{children}</datalist>
          <Span short={noLabel} />
        </>
      ) : (
        <>
          <InputElement list={name} {...rest} id={name} />
          <datalist id={name}>{children}</datalist>
          <Label htmlFor={name}>{placeholder}</Label>
          <Span />
        </>
      )}
    </InputContainer>
  )
}
