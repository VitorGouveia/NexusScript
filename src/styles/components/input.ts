import styled, { css } from 'styled-components'

export const InputContainer = styled.div`
  position: relative;

  @media (max-width: 600px) {
    width: 100%;
    input {
      width: 100%;
    }
  }
`

type InputElementProps = {
  short?: boolean
}

export const InputElement = styled.input<InputElementProps>`
  font-size: 14px;
  border: 0;
  outline: 0;
  padding: 4px 0;
  border-bottom: 1.5px solid ${(props) => props.theme.gray[700]};
  background: transparent;
  z-index: 10;
  color: ${(props) => props.theme.gray[700]};

  ${(props) =>
    props.short &&
    css`
      text-align: center;
      font-size: 30px;

      ~ label {
        left: 50%;
        transform: translateX(-50%);
      }
    `}

  &:focus {
    & ~ span {
      width: 100%;
      transition: 0.4s;
    }

    & ~ label {
      color: ${(props) => props.theme.accent[200]};
    }
  }
`

export const Label = styled.label`
  position: absolute;
  left: 0;

  width: 100%;
  cursor: text;
  top: -16px;
  font-size: 14px;
  font-weight: bold;
  transform: translateY(-50%);
  color: ${(props) => props.theme.gray[700]};
  transition: 0.2s;
  letter-spacing: 0.5px;
`

type SpanProps = {
  short?: boolean
}

export const Span = styled.span<SpanProps>`
  position: absolute;
  bottom: 0;
  left: 0;

  ${(props) =>
    props.short &&
    css`
      left: 50%;
      transform: translateX(-50%);
    `}

  width: 0;
  height: 1.5px;
  background: ${(props) => props.theme.accent[200]};
  transition: 0.4s;
`

export const Select = styled.select`
  background: transparent;
  outline: 0;
  border: 0;
`
